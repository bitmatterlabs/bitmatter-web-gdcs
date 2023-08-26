const team = [
  {
    name: (
      <span>
        Mansoor
        <br />
        Kanekere
      </span>
    ),
    designation: "General Manager",
    key: "team-0",
    details:
      "Mr. Mansoor, one of the leading pillars in Glowrytic Services brings 8 years of Business Consultancy Experience in the Organization. In his tenure with well - fit his networking and strategies made him travel across the world, Mr. Mansoor expanded his perspectives & vision.",
  },
  {
    name: (
      <span>
        Buraid
        <br />
        Busthan
      </span>
    ),
    designation: "Operation Manager",
    key: "team-1",
    details:
      "The young dynamic & spontaneous Buraid plays the \"Guardian\" at Growlytic, the preserver of what represents good in the organization. As he indeed knows how to successfully reach out to the clients requirements, needs with satisfaction. Being a key attribute of the management team, Buraid oversees Business operation functions, Resource Management & strategy Planning at Growlytic Services.",
  },
  {
    name: (
      <span>
        Ruman
        <br />
        Ansar
      </span>
    ),
    designation: "Marketing Manager",
    key: "team-2",
    details:
      "Mr. Ruman is the most active member of the team responsible for Marketing activities in the organization. His bold approach to attract customers and advising them with real time solutions, leaves us with \"Our Happy Customers\". Ruman holds a collective experience of 7 years in Sales & Marketing activities. Steering the wheel towards a bright & emerging economy in Dubai, his contribution is momentous.",
  },
];

export const Team = ({ className }: { className?: string }) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-3 gap-4 [&_div]:bg-[#ECEFF1] [&_div]:flex [&_div]:flex-col [&_div]:justify-start [&_div]:space-y-2 [&_div]:p-2 [&_div]:rounded-[0.375rem] [&_div]:border ${
        className || ""
      }`}
    >
      {team.map((member) => (
        <div key={member.key}>
          <p className="text-3xl font-extrabold">{member.name}</p>
          <p className="text-lg font-semibold">{member.designation}</p>
          <p>{member.details}</p>
        </div>
      ))}
    </div>
  );
};
