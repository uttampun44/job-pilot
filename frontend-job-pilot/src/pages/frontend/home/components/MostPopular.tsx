
type tJobType = {
    label: string,
    value: string,
}
type industriesProps = {
    data: {
        industries: tJobType[]
    }
}

export default function MostPopular({data}: industriesProps) {

  const industries = Array.isArray(data.industries) ? data.industries : []

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-medium mb-4">Most Popular Vacancies</h1>
        <div className="job-list my-18 w-full">
           {
             industries.map((item, index) => {
               return (
                 <div key={index} className="job-item">
                   <div className="job-item-title">
                     <h2 className="text-2xl font-medium">{item.label}</h2>
                     <p className="text-sm text-gray-500">20, 450 vacancies</p>
                   </div>
                 </div>
               )
             })
           }
        </div>
      </div>
    </section>
  );
}
