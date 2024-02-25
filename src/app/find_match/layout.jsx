import Filter from "../(Components)/Filter/Filter";

export default function ProfileLayout({ children }) {
  return (

    <div className='flex flex-row gap-2 w-full h-full'>
      <Filter />
      {/* All the other pages gets displayed here */}
      {children}
    </div>







  );
}
