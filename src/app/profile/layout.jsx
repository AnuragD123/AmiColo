import Sidebar from "../(Components)/Profile/Sidebar/Sidebar";

export default function ProfileLayout({ children }) {
  return (

    <div className="flex flex-row gap-2">
        
        {/* Sidebar for all profile routes */}

        <Sidebar/>
                
        {/* All the other pages gets displayed here */}
        {children}

    </div>
      
      
    
  );
}
