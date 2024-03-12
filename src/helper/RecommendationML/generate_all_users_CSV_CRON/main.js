const mysql = require('mysql2');
const { exec } = require('child_process');
const path = require('path');
const csvWriter = require('csv-writer');

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'amicolo',
    connectionLimit: 10, // Adjust based on your needs
});

// Replace 'column1', 'column2', etc., with the actual column names in your "users" table
const query = 'SELECT id, first_name, last_name, gender, dob, bio, avatar, occupation, smoker, cleanliness, bedtime, diet, nationality, education, count_friends, languages FROM users';

// Execute the query
pool.query(query, (err, results, fields) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }

    // Process the results
    console.log('Query results:', typeof results);

    // Define CSV header
    const header = [
        { id: 'id', title: 'id' },
        { id: 'first_name', title: 'first_name' },
        { id: 'last_name', title: 'last_name' },
        // Add other columns...
    ];

    // Create a CSV writer
    const writer = csvWriter.createObjectCsvWriter({
        path: '../files/results.csv',
        header,
    });

    // Write records to the CSV file
    writer.writeRecords(results).then(() => {
        console.log('CSV file written successfully!');
    });

    // Path for the CSV file
    const csvPath = '../files/results.csv';
    // Path for the Python script
    const pythonScriptPath = '../files/script.py';

    // Construct the Python command
    const pythonCommand = `python ${pythonScriptPath} ${csvPath}`;
    console.log(pythonCommand);

    // Execute the Python script
    exec(pythonCommand, (error, stdout, stderr) => {
        if (error) {
            console.error('Error running Python script:', error);
        } else {
            console.log('Python script executed successfully:', stdout);
        }
    });

    // Close the MySQL connection pool
    pool.end((err) => {
        if (err) {
            console.error('Error closing connection:', err);
            return;
        }
        console.log('Connection closed');
    });
});
