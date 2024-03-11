import React from 'react';

const PrivacyPolicy = () => {
    return (

        <div className='py-10'>
            <div className='p-5 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400' style={{ transform: "skewY(-3deg)" }}>
                <p className='text-white text-5xl font-bold uppercase'>AmiColo User Data Deletion Policy</p>
            </div>
            <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
                <div>
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            AmiColo Data Deletion Policy
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                            Last Updated: 12-02-2024
                        </p>
                    </div>
                    <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16 text-gray-700">
                        <h3 className="text-xl font-bold">Introduction</h3>
                        <p>
                            At AmiColo, we understand the importance of privacy and are committed to maintaining the trust and confidence of our users. In line with this commitment, we provide our users with the option to delete their account and associated data. Please carefully review the following User Data Deletion Policy to understand how you can submit a request for deletion and what the process entails.
                        </p>

                        <h3 className="text-xl font-bold">How to Request Data Deletion</h3>
                        <ul className="list-disc ml-8">
                            <li>Fill Out the Data Deletion Form: Users wishing to delete their account and associated data must fill out the Data Deletion Form available on the AmiColo website. This form requires basic information to identify your account and understand your deletion request.</li>
                            <li>Submission: After completing the form, submit it through the designated submission button provided on the form page.</li>
                        </ul>

                        <h3 className="text-xl font-bold">What Happens After You Submit a Request</h3>
                        <ul className="list-disc ml-8">
                            <li>Confirmation Email: Once you submit the Data Deletion Form, you will receive an automatic confirmation email acknowledging receipt of your request. Please ensure you check your inbox and spam/junk folder for this confirmation.</li>
                            <li>Verification Process: To protect your privacy and security, AmiColo will contact you via info@amicolo.com to verify your identity and your intention to delete your account. This step is crucial to prevent unauthorized deletions.</li>
                            <li>Deletion Process: After verifying your identity and confirming your request, AmiColo will proceed to delete your account and associated user data from our servers. We will remove all information that can personally identify you, in compliance with applicable privacy laws and regulations.</li>
                            <li>Final Confirmation: Once the deletion process is complete, you will receive a final email confirmation from AmiColo, indicating that your account and associated data have been successfully deleted.</li>
                        </ul>



                        <h3 className="text-xl font-bold">Additional Information</h3>
                        <p>
                            <strong>Timeline:</strong> The entire process, from the verification to the deletion of your data, may take up to 30 days, depending on the volume of requests and the complexity of your data.
                        </p>
                        <p>
                            <strong>Data Retention:</strong> In some cases, regulatory or legal obligations may require us to retain certain information for a specified period even after the deletion request. Such information will be securely stored and isolated from further processing until it can be deleted.

                        </p>

                        <h3 className="text-xl font-bold">Contacts Us</h3>
                        <p>
                            If you have any questions or concerns regarding the data deletion process, please do not hesitate to contact us at <a href="mailto:info@amicolo.com" className="text-blue-500">info@amicolo.com.</a>.
                        </p>

                        <p>By providing a clear and straightforward process for users to delete their accounts and associated data, AmiColo reaffirms its commitment to user privacy and data protection.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
