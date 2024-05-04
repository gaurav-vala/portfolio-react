export default function Skills() {
  const skills_arr = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJs",
    "Figma",
    "Photoshop",
    "Canva",
  ];

  return (
    <>
      <div className="container mx-auto px-6 mt-6">
        <h2 className="pt-4 pb-3 text-3xl font-semibold capitalize">
          Things I Can Work with
        </h2>
        <ul className="flex gap-2 flex-wrap">
          {skills_arr.map((single_skill, index) => (
            <li
              key={index}
              className="border border-black my-2 p-2 rounded-xl shadow-black_2 text-xl font-semibold"
            >
              {single_skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
