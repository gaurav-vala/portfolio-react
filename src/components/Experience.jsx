export default function Experience() {
  const work_obj = [
    {
      company_name: "WebOccult Technologies, Ahmedabad",
      company_timeline: "August 2022 - PRESENT",
      company_designation: "Jr. Web Designer",
      company_details:
        "Created pixel perfect Websites that are being used by hundreds of global user bases. Worked as a dedicated developer, directly communicating with clients to understand their needs and implementing them in their websites. Managed team in multiple tight deadline projects while delivering them on time with quality codebase Worked on projects with changing requirements while exploring feasibility of on hand tasks.",
    },
  ];
  return (
    <>
      <div className="work_expe_container container mx-auto px-6 mt-6">
        <h2 className="pt-4 pb-3 text-3xl font-semibold capitalize">
          My Work Experience
        </h2>

        <div className="work_container">
          <ul>
            {work_obj.map((single_company) => (
              <li className="py-6">
                <h4 className="text-2xl lg:text-3xl font-bold">
                  {single_company.company_name}
                </h4>
                <p className="pt-2 text-2xl">
                  {single_company.company_designation}
                </p>
                <p className="italic">{single_company.company_timeline}</p>
                <p className="pt-2 leading-7 text-lg text-gray-800">
                  {single_company.company_details}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
