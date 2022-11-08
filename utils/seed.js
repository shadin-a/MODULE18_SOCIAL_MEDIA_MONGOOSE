//SEED WITH DATA TO RUN

//USER SEEDS
const userData = [
    {
        username: 'FrodoBaggins',
        email: 'iwilltaketheringbutidontknowtheway@gmail.com',
        thoughts: [],
        friends: [],
        friendCount: 0,
    },
    {
        username: 'SamwiseGamgee',
        email: 'icantcarryitforyoubuticancarryyou@gmail.com',
        thoughts: [],
        friends: [],
        friendCount: 0,
    },
];

    //THOUGHT SEEDS
    const thoughtData = [
        {
          thoughtText: "You're late.",
          username: "FrodoBaggins",
        },
        {
          thoughtText: "I tried to save the Shire, and it has been saved, but not for me. It must often be so, Sam, when things are in danger: someone has to give them up, lose them, so that others may keep them.",
          username: "FrodoBaggins",
        },
        {
          thoughtText: "Boil em, mash em, stick em in a stew.",
          username: "SamwiseGamgee",
        },
        {
          thoughtText:
            "If I take one more step, itll be the farthest away from home Ive ever been.”",
          username: "SamwiseGamgee",
        },
      ];
      
      const seedData = async () => {
        await Users.deleteMany({});
        await Users.insertMany(userData);
        console.log('USERS SEEDED!')
        await Thoughts.deleteMany({});
        await Thoughts.insertMany(thoughtData);
        console.log('THOUGHTS SEEDED!')
      };

      seedData().then(() => {
        mongoose.connection.close();
      });
      