export default function MostPopular() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-medium mb-4">Most Popular Vacancies</h1>

        <div className="job-list my-18 w-full">
          <div className="grid grid-cols-4 gap-8">
             <div className="grid-One">
                 <h5 className="text-lg font-medium">Anesthesiologists</h5>
                 <p className="text-[#767F8C]">45,904 Open Positions</p>
             </div>
             <div className="grid-two">
                 <h5 className="text-lg font-medium">Surgeons</h5>
                 <p className="text-[#767F8C]">50,364 Open Positions</p>
             </div>
             <div className="grid-three">
                 <h5 className="text-lg font-medium">Dentists</h5>
                 <p className="text-[#767F8C]">4,339 Open Positions</p>
             </div>
             <div className="grid-four">
                 <h5 className="text-lg font-medium">Nurses</h5>
                 <p className="text-[#767F8C]">20,079 Open Positions</p>
             </div>
             <div className="grid-five">
                 <h5 className="text-lg font-medium">HR</h5>
                 <p className="text-[#767F8C]">74,875 Open Positions</p>
             </div>
             <div className="grid-six">
                 <h5 className="text-lg font-medium">IT Manager</h5>
                 <p className="text-[#767F8C]">43,359 Open Positions</p>
             </div>
             <div className="grid-seven">
                 <h5 className="text-lg font-medium">Software Developer</h5>
                 <p className="text-[#767F8C]">18,599 Open Positions</p>
             </div>
             <div className="grid-eight">
                 <h5 className="text-lg font-medium">Web Developer</h5>
                 <p className="text-[#767F8C]">28,200 Open Positions</p>
             </div>
             <div className="grid-nine">
                 <h5 className="text-lg font-medium">Data Analyst</h5>
                 <p className="text-[#767F8C]">61,391 Open Positions</p>
             </div>
             <div className="grid-ten">
                 <h5 className="text-lg font-medium">FullStack Developer</h5>
                 <p className="text-[#767F8C]">93,046 Open Positions</p>
             </div>
             <div className="grid-eleven">
                 <h5 className="text-lg font-medium">Operations Research Analysis</h5>
                 <p className="text-[#767F8C]">50,963 Open Positions</p>
             </div>
             <div className="grid-twelve">
                 <h5 className="text-lg font-medium">Project Manager</h5>
                 <p className="text-[#767F8C]">16,627 Open Positions</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
