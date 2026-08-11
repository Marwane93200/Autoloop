/* =========================================================
   AUTOLOOP — V0.5
   Base véhicule + catalogue pièces
   ========================================================= */

const AUTOLOOP_VERSION = "0.5";

/* =========================================================
   BASE VEHICULES
   Structure volontairement extensible.
   ========================================================= */

const VEHICLES = {

  Renault: {
    Clio: {
      years: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
              2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
              2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
              2020, 2021, 2022, 2023, 2024, 2025, 2026],
      engines: [
        "1.2 essence",
        "1.4 essence",
        "1.6 essence",
        "0.9 TCe",
        "1.0 TCe",
        "1.2 TCe",
        "1.5 dCi",
        "1.6 dCi",
        "E-Tech hybride"
      ]
    },

    Megane: {
      years: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,
              2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,
              2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,
              2025,2026],
      engines: [
        "1.4 essence",
        "1.6 essence",
        "2.0 essence",
        "1.2 TCe",
        "1.3 TCe",
        "1.5 dCi",
        "1.6 dCi",
        "1.9 dCi",
        "2.0 dCi",
        "E-Tech électrique"
      ]
    },

    Captur: {
      years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "0.9 TCe",
        "1.0 TCe",
        "1.2 TCe",
        "1.3 TCe",
        "1.5 dCi",
        "E-Tech hybride",
        "E-Tech hybride rechargeable"
      ]
    },

    Scenic: {
      years: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,
              2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,
              2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.4 essence",
        "1.6 essence",
        "2.0 essence",
        "1.2 TCe",
        "1.3 TCe",
        "1.5 dCi",
        "1.6 dCi",
        "1.9 dCi",
        "2.0 dCi",
        "E-Tech électrique"
      ]
    },

    Austral: {
      years: [2022,2023,2024,2025,2026],
      engines: [
        "1.2 E-Tech full hybrid",
        "1.3 mild hybrid"
      ]
    },

    Arkana: {
      years: [2021,2022,2023,2024,2025,2026],
      engines: [
        "1.3 TCe",
        "E-Tech hybride"
      ]
    },

    Kadjar: {
      years: [2015,2016,2017,2018,2019,2020,2021],
      engines: [
        "1.2 TCe",
        "1.3 TCe",
        "1.5 dCi",
        "1.6 dCi"
      ]
    },

    Espace: {
      years: [1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,
              2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,
              2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,
              2021,2022,2023,2024,2025,2026],
      engines: [
        "2.0 essence",
        "2.0 dCi",
        "2.2 dCi",
        "1.6 dCi",
        "1.8 TCe",
        "2.0 TCe",
        "E-Tech hybride"
      ]
    },

    Talisman: {
      years: [2015,2016,2017,2018,2019,2020,2021,2022],
      engines: [
        "1.3 TCe",
        "1.6 TCe",
        "1.5 dCi",
        "1.6 dCi",
        "2.0 dCi"
      ]
    },

    Kangoo: {
      years: [1997,1998,1999,2000,2001,2002,2003,2004,2005,
              2006,2007,2008,2009,2010,2011,2012,2013,2014,
              2015,2016,2017,2018,2019,2020,2021,2022,2023,
              2024,2025,2026],
      engines: [
        "1.2 essence",
        "1.4 essence",
        "1.5 dCi",
        "1.6 dCi",
        "E-Tech électrique"
      ]
    },

    Trafic: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
              2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,
              2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,
              2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.9 dCi",
        "2.0 dCi",
        "2.5 dCi",
        "2.0 Blue dCi",
        "E-Tech électrique"
      ]
    },

    Master: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
              2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,
              2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,
              2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "2.2 dCi",
        "2.3 dCi",
        "2.3 Blue dCi",
        "E-Tech électrique"
      ]
    }
  },


  Peugeot: {

    106: {
      years: [1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003],
      engines: [
        "1.0 essence",
        "1.1 essence",
        "1.4 essence",
        "1.6 essence",
        "1.5 diesel"
      ]
    },

    206: {
      years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012],
      engines: [
        "1.1 essence",
        "1.4 essence",
        "1.6 essence",
        "2.0 essence",
        "1.4 HDi",
        "1.6 HDi",
        "2.0 HDi"
      ]
    },

    207: {
      years: [2006,2007,2008,2009,2010,2011,2012,2013,2014],
      engines: [
        "1.4 essence",
        "1.6 essence",
        "1.4 HDi",
        "1.6 HDi"
      ]
    },

    208: {
      years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 PureTech",
        "1.2 PureTech",
        "1.5 BlueHDi",
        "e-208 électrique"
      ]
    },

    308: {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.2 PureTech",
        "1.6 THP",
        "1.5 BlueHDi",
        "1.6 BlueHDi",
        "1.6 HDi",
        "1.6 Hybrid",
        "Plug-in Hybrid"
      ]
    },

    3008: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.2 PureTech",
        "1.6 THP",
        "1.5 BlueHDi",
        "1.6 BlueHDi",
        "2.0 BlueHDi",
        "Hybrid",
        "Plug-in Hybrid",
        "Electric"
      ]
    },

    5008: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.2 PureTech",
        "1.6 THP",
        "1.5 BlueHDi",
        "2.0 BlueHDi",
        "Hybrid",
        "Plug-in Hybrid",
        "Electric"
      ]
    },

    508: {
      years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.6 THP",
        "1.5 BlueHDi",
        "2.0 BlueHDi",
        "Plug-in Hybrid"
      ]
    }
  },


  Citroen: {

    C1: {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
      engines: [
        "1.0 essence",
        "1.2 PureTech",
        "1.4 HDi"
      ]
    },

    C3: {
      years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.1 essence",
        "1.2 PureTech",
        "1.4 essence",
        "1.5 BlueHDi",
        "1.6 HDi"
      ]
    },

    C4: {
      years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.2 PureTech",
        "1.6 THP",
        "1.5 BlueHDi",
        "1.6 HDi",
        "Electric"
      ]
    },

    Berlingo: {
      years: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.4 essence",
        "1.6 essence",
        "1.6 HDi",
        "1.5 BlueHDi",
        "Electric"
      ]
    }
  },


  Dacia: {

    Sandero: {
      years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 SCe",
        "0.9 TCe",
        "1.0 TCe",
        "1.5 dCi",
        "Eco-G"
      ]
    },

    Duster: {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.2 TCe",
        "1.3 TCe",
        "1.5 dCi",
        "1.6 SCe",
        "Hybrid"
      ]
    },

    Jogger: {
      years: [2022,2023,2024,2025,2026],
      engines: [
        "1.0 TCe",
        "1.0 Eco-G",
        "Hybrid"
      ]
    }
  },


  Volkswagen: {

    Golf: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 TSI",
        "1.2 TSI",
        "1.4 TSI",
        "1.5 TSI",
        "2.0 TSI",
        "1.6 TDI",
        "2.0 TDI",
        "GTE hybride",
        "e-Golf",
        "GTI"
      ]
    },

    Polo: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 MPI",
        "1.0 TSI",
        "1.2 TSI",
        "1.4 TDI",
        "1.6 TDI"
      ]
    },

    Passat: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      engines: [
        "1.4 TSI",
        "1.5 TSI",
        "1.8 TSI",
        "2.0 TSI",
        "1.6 TDI",
        "2.0 TDI",
        "GTE hybride"
      ]
    },

    Tiguan: {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.4 TSI",
        "1.5 TSI",
        "2.0 TSI",
        "2.0 TDI",
        "eHybrid"
      ]
    }
  },


  Audi: {

    A3: {
      years: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 TFSI",
        "1.2 TFSI",
        "1.4 TFSI",
        "1.5 TFSI",
        "2.0 TFSI",
        "1.6 TDI",
        "2.0 TDI",
        "TFSI e"
      ]
    },

    A4: {
      years: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      engines: [
        "1.4 TFSI",
        "2.0 TFSI",
        "2.0 TDI",
        "3.0 TDI"
      ]
    },

    Q3: {
      years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.4 TFSI",
        "1.5 TFSI",
        "2.0 TFSI",
        "2.0 TDI",
        "TFSI e"
      ]
    }
  },


  BMW: {

    Serie_1: {
      label: "Série 1",
      years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "116i",
        "118i",
        "120i",
        "125i",
        "116d",
        "118d",
        "120d",
        "M135i"
      ]
    },

    Serie_3: {
      label: "Série 3",
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "318i",
        "320i",
        "330i",
        "340i",
        "318d",
        "320d",
        "330d",
        "M340i"
      ]
    },

    Serie_5: {
      label: "Série 5",
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "520i",
        "530i",
        "540i",
        "520d",
        "530d",
        "M550i"
      ]
    },

    X1: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "sDrive18i",
        "sDrive20i",
        "xDrive20i",
        "sDrive18d",
        "xDrive18d",
        "xDrive20d",
        "xDrive25e"
      ]
    },

    X3: {
      years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "xDrive20i",
        "xDrive30i",
        "xDrive20d",
        "xDrive30d",
        "M40i"
      ]
    }
  },


  Mercedes_Benz: {

    Classe_A: {
      label: "Classe A",
      years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "A160",
        "A180",
        "A200",
        "A220",
        "A250",
        "A180d",
        "A200d",
        "A220d",
        "A250e"
      ]
    },

    Classe_C: {
      label: "Classe C",
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "C180",
        "C200",
        "C220d",
        "C300",
        "C300e",
        "C43 AMG"
      ]
    },

    GLA: {
      years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "GLA 180",
        "GLA 200",
        "GLA 220d",
        "GLA 250e",
        "AMG GLA 35"
      ]
    }
  },


  Ford: {

    Fiesta: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      engines: [
        "1.0 EcoBoost",
        "1.1 essence",
        "1.25 essence",
        "1.4 TDCi",
        "1.5 TDCi"
      ]
    },

    Focus: {
      years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      engines: [
        "1.0 EcoBoost",
        "1.5 EcoBoost",
        "1.5 TDCi",
        "2.0 TDCi"
      ]
    },

    Puma: {
      years: [2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 EcoBoost",
        "1.0 EcoBoost Hybrid",
        "1.5 EcoBoost"
      ]
    }
  },


  Toyota: {

    Yaris: {
      years: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 essence",
        "1.3 essence",
        "1.4 D-4D",
        "1.5 Hybrid"
      ]
    },

    Corolla: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.4 essence",
        "1.6 essence",
        "1.8 Hybrid",
        "2.0 Hybrid",
        "1.4 D-4D"
      ]
    },

    C_HR: {
      label: "C-HR",
      years: [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.2 Turbo",
        "1.8 Hybrid",
        "2.0 Hybrid"
      ]
    }
  },


  Nissan: {

    Micra: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
      engines: [
        "1.0 essence",
        "1.2 essence",
        "1.5 dCi"
      ]
    },

    Qashqai: {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.2 DIG-T",
        "1.3 DIG-T",
        "1.5 dCi",
        "1.6 dCi",
        "e-Power"
      ]
    },

    Juke: {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 DIG-T",
        "1.2 DIG-T",
        "1.5 dCi",
        "1.6 essence"
      ]
    }
  },


  Hyundai: {

    i20: {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 T-GDi",
        "1.2 essence",
        "1.1 CRDi",
        "1.4 CRDi"
      ]
    },

    Tucson: {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.6 GDi",
        "1.6 T-GDi",
        "1.6 CRDi",
        "2.0 CRDi",
        "Hybrid",
        "Plug-in Hybrid"
      ]
    }
  },


  Kia: {

    Picanto: {
      years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.0 essence",
        "1.2 essence"
      ]
    },

    Sportage: {
      years: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.6 GDi",
        "1.6 T-GDi",
        "1.6 CRDi",
        "2.0 CRDi",
        "Hybrid",
        "Plug-in Hybrid"
      ]
    }
  },


  Volvo: {

    XC40: {
      years: [2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "T2",
        "T3",
        "T4",
        "B3",
        "B4",
        "D3",
        "D4",
        "Recharge électrique"
      ]
    },

    XC60: {
      years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "T5",
        "T6",
        "B4",
        "B5",
        "D4",
        "D5",
        "Recharge hybride"
      ]
    }
  },


  Fiat: {

    500: {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.2 essence",
        "0.9 TwinAir",
        "1.3 Multijet",
        "500e électrique"
      ]
    },

    Panda: {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "1.1 essence",
        "1.2 essence",
        "0.9 TwinAir",
        "1.3 Multijet"
      ]
    }
  },


  Tesla: {

    Model_3: {
      label: "Model 3",
      years: [2019,2020,2021,2022,2023,2024,2025,2026],
      engines: [
        "Propulsion électrique",
        "Grande Autonomie électrique",
        "Performance électrique"
      ]
    },

    Model_Y: {
      label: "Model Y",
      years: [2021,2022,2023,2024,2025,2026],
      engines: [
        "Propulsion électrique",
        "Grande Autonomie électrique",
        "Performance électrique"
      ]
    }
  }

};


/* =========================================================
   LISTE DES MARQUES
   ========================================================= */

const VEHICLE_BRANDS = Object.keys(VEHICLES);


/* =========================================================
   OUTILS
   ========================================================= */

function getBrandLabel(key) {
  const labels = {
    Mercedes_Benz: "Mercedes-Benz",
    BMW: "BMW",
    Volkswagen: "Volkswagen",
    Citroen: "Citroën",
    Peugeot: "Peugeot",
    Renault: "Renault",
    Dacia: "Dacia",
    Audi: "Audi",
    Ford: "Ford",
    Toyota: "Toyota",
    Nissan: "Nissan",
    Hyundai: "Hyundai",
    Kia: "Kia",
    Volvo: "Volvo",
    Fiat: "Fiat",
    Tesla: "Tesla"
  };

  return labels[key] || key;
}


function getModelLabel(key, data) {
  return data.label || key.replaceAll("_", " ");
}


function getModels(brand) {

  if (!VEHICLES[brand]) {
    return [];
  }

  return Object.keys(VEHICLES[brand]);
}


function getVehicleData(brand, model) {

  if (!VEHICLES[brand]) {
    return null;
  }

  if (!VEHICLES[brand][model]) {
    return null;
  }

  return VEHICLES[brand][model];
}


function getYears(brand, model) {

  const vehicle = getVehicleData(brand, model);

  if (!vehicle) {
    return [];
  }

  return [...vehicle.years].sort((a, b) => b - a);
}


function getEngines(brand, model) {

  const vehicle = getVehicleData(brand, model);

  if (!vehicle) {
    return [];
  }

  return vehicle.engines || [];
}


/* =========================================================
   PIECES AUTOMOBILES
   ========================================================= */

const PART_CATEGORIES = [
  "Freinage",
  "Moteur",
  "Embrayage",
  "Transmission",
  "Suspension",
  "Direction",
  "Électricité",
  "Refroidissement",
  "Filtration",
  "Échappement",
  "Carrosserie",
  "Éclairage",
  "Climatisation",
  "Habitacle",
  "Pneumatiques",
  "Entretien",
  "Autre"
];


const COMMON_PARTS = [
  "Plaquettes de frein avant",
  "Plaquettes de frein arrière",
  "Disques de frein avant",
  "Disques de frein arrière",
  "Kit embrayage",
  "Volant moteur",
  "Alternateur",
  "Démarreur",
  "Batterie",
  "Filtre à huile",
  "Filtre à air",
  "Filtre à carburant",
  "Filtre habitacle",
  "Bougies",
  "Bobines d'allumage",
  "Courroie de distribution",
  "Kit distribution",
  "Pompe à eau",
  "Amortisseur avant",
  "Amortisseur arrière",
  "Ressort de suspension",
  "Rotule de direction",
  "Triangle de suspension",
  "Cardan",
  "Radiateur",
  "Thermostat",
  "Pompe à carburant",
  "Injecteur",
  "Turbo",
  "Compresseur de climatisation",
  "Phare avant",
  "Feu arrière",
  "Rétroviseur",
  "Pare-chocs avant",
  "Pare-chocs arrière",
  "Aile",
  "Capot",
  "Portière",
  "Lève-vitre",
  "Moteur complet",
  "Boîte de vitesses"
];


/* =========================================================
   STOCKAGE LOCAL
   ========================================================= */

const STORAGE_KEYS = {
  USER: "autoloop_user",
  PRODUCTS: "autoloop_products",
  CART: "autoloop_cart",
  ORDERS: "autoloop_orders"
};


function loadJSON(key, fallback) {

  try {

    const value = localStorage.getItem(key);

    if (!value) {
      return fallback;
    }

    return JSON.parse(value);

  } catch (error) {

    console.error("AutoLoop storage error:", error);

    return fallback;
  }
}


function saveJSON(key, value) {

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );

}


/* =========================================================
   DONNEES INITIALES
   ========================================================= */

let currentUser = loadJSON(
  STORAGE_KEYS.USER,
  null
);

let products = loadJSON(
  STORAGE_KEYS.PRODUCTS,
  []
);

let cart = loadJSON(
  STORAGE_KEYS.CART,
  []
);

let orders = loadJSON(
  STORAGE_KEYS.ORDERS,
  []
);


/* =========================================================
   IDENTIFIANT
   ========================================================= */

function createId(prefix = "id") {

  return (
    prefix +
    "_" +
    Date.now() +
    "_" +
    Math.random()
      .toString(36)
      .substring(2, 9)
  );

}


/* =========================================================
   EXPORT GLOBAL
   ========================================================= */

window.AutoLoop = {

  version: AUTOLOOP_VERSION,

  vehicles: VEHICLES,

  brands: VEHICLE_BRANDS,

  parts: COMMON_PARTS,

  categories: PART_CATEGORIES,

  getBrandLabel,

  getModelLabel,

  getModels,

  getVehicleData,

  getYears,

  getEngines,

  createId

};

console.log(
  "AutoLoop V0.5 chargé.",
  VEHICLE_BRANDS.length,
  "marques disponibles."
);/* =========================================================
   AUTOLOOP V0.5 — SELECTEUR VEHICULE
   ========================================================= */

function createSelectOptions(items, labelFunction) {

  return items.map(item => {

    const label = labelFunction
      ? labelFunction(item)
      : item;

    return `
      <option value="${item}">
        ${label}
      </option>
    `;

  }).join("");

}


/* =========================================================
   SELECTEUR MARQUE
   ========================================================= */

function vehicleBrandSelect(id = "vehicleBrand") {

  return `
    <select
      id="${id}"
      onchange="vehicleBrandChanged(this.value)"
    >

      <option value="">
        Choisir une marque
      </option>

      ${createSelectOptions(
        VEHICLE_BRANDS,
        getBrandLabel
      )}

    </select>
  `;
}


/* =========================================================
   CHANGEMENT MARQUE
   ========================================================= */

function vehicleBrandChanged(brand) {

  const model =
    document.querySelector("#vehicleModel");

  const year =
    document.querySelector("#vehicleYear");

  const engine =
    document.querySelector("#vehicleEngine");

  if (!model) return;

  model.innerHTML = `
    <option value="">
      Choisir un modèle
    </option>
  `;

  if (year) {

    year.innerHTML = `
      <option value="">
        Choisir une année
      </option>
    `;

  }

  if (engine) {

    engine.innerHTML = `
      <option value="">
        Choisir une motorisation
      </option>
    `;

  }

  if (!brand) return;

  const models =
    getModels(brand);

  models.forEach(modelKey => {

    const option =
      document.createElement("option");

    option.value =
      modelKey;

    option.textContent =
      getModelLabel(
        modelKey,
        VEHICLES[brand][modelKey]
      );

    model.appendChild(option);

  });

}


/* =========================================================
   CHANGEMENT MODELE
   ========================================================= */

function vehicleModelChanged(
  brand,
  modelValue
) {

  const year =
    document.querySelector("#vehicleYear");

  const engine =
    document.querySelector("#vehicleEngine");

  if (!year) return;

  year.innerHTML = `
    <option value="">
      Choisir une année
    </option>
  `;

  if (engine) {

    engine.innerHTML = `
      <option value="">
        Choisir une motorisation
      </option>
    `;

  }

  if (!brand || !modelValue) {
    return;
  }

  const years =
    getYears(
      brand,
      modelValue
    );

  years.forEach(yearValue => {

    const option =
      document.createElement("option");

    option.value =
      yearValue;

    option.textContent =
      yearValue;

    year.appendChild(option);

  });

}


/* =========================================================
   CHANGEMENT ANNEE
   ========================================================= */

function vehicleYearChanged(
  brand,
  modelValue,
  yearValue
) {

  const engine =
    document.querySelector("#vehicleEngine");

  if (!engine) return;

  engine.innerHTML = `
    <option value="">
      Choisir une motorisation
    </option>
  `;

  if (
    !brand ||
    !modelValue ||
    !yearValue
  ) {

    return;

  }

  const engines =
    getEngines(
      brand,
      modelValue
    );

  engines.forEach(engineValue => {

    const option =
      document.createElement("option");

    option.value =
      engineValue;

    option.textContent =
      engineValue;

    engine.appendChild(option);

  });

}


/* =========================================================
   EVENEMENTS SELECTEUR
   ========================================================= */

document.addEventListener(
  "change",
  function(event) {

    if (
      event.target &&
      event.target.id === "vehicleModel"
    ) {

      const brand =
        document.querySelector(
          "#vehicleBrand"
        )?.value;

      vehicleModelChanged(
        brand,
        event.target.value
      );

    }


    if (
      event.target &&
      event.target.id === "vehicleYear"
    ) {

      const brand =
        document.querySelector(
          "#vehicleBrand"
        )?.value;

      const model =
        document.querySelector(
          "#vehicleModel"
        )?.value;

      vehicleYearChanged(
        brand,
        model,
        event.target.value
      );

    }

  }
);


/* =========================================================
   CREATION D'UN SELECTEUR COMPLET
   ========================================================= */

function vehicleSelectorHTML() {

  return `

    <div class="vehicle-selector">

      <label>
        Marque du véhicule
      </label>

      ${vehicleBrandSelect()}

      <label>
        Modèle
      </label>

      <select id="vehicleModel">

        <option value="">
          Choisir un modèle
        </option>

      </select>

      <label>
        Année
      </label>

      <select id="vehicleYear">

        <option value="">
          Choisir une année
        </option>

      </select>

      <label>
        Motorisation
      </label>

      <select id="vehicleEngine">

        <option value="">
          Choisir une motorisation
        </option>

      </select>

    </div>

  `;

}


/* =========================================================
   VEHICULE SELECTIONNE
   ========================================================= */

function getSelectedVehicle() {

  const brand =
    document.querySelector(
      "#vehicleBrand"
    )?.value;

  const model =
    document.querySelector(
      "#vehicleModel"
    )?.value;

  const year =
    document.querySelector(
      "#vehicleYear"
    )?.value;

  const engine =
    document.querySelector(
      "#vehicleEngine"
    )?.value;

  if (
    !brand ||
    !model ||
    !year ||
    !engine
  ) {

    return null;

  }

  return {

    brand:
      getBrandLabel(brand),

    brandKey:
      brand,

    model:
      getModelLabel(
        model,
        VEHICLES[brand][model]
      ),

    modelKey:
      model,

    year:
      Number(year),

    engine:
      engine

  };

}


/* =========================================================
   AFFICHAGE VEHICULE
   ========================================================= */

function formatVehicle(vehicle) {

  if (!vehicle) {
    return "";
  }

  return `
    ${vehicle.brand}
    ${vehicle.model}
    ${vehicle.year}
    ·
    ${vehicle.engine}
  `;

}/* =========================================================
   AUTOLOOP V0.5 — AJOUT D'UNE PIECE
   ========================================================= */

function addProductPage() {

  if (!currentUser) {
    return loginPage();
  }

  return `

    <section class="wrap">

      <div class="form">

        <p class="eyebrow">
          ESPACE VENDEUR
        </p>

        <h2>
          Ajouter une pièce
        </h2>

        <p class="muted">
          Renseigne précisément la pièce et le véhicule
          compatible.
        </p>


        <form
          id="addProductForm"
          class="card"
          onsubmit="publishProduct(event)"
        >


          <!-- NOM DE LA PIECE -->

          <label>
            Nom de la pièce
          </label>

          <input
            id="productName"
            class="input"
            type="text"
            required
            placeholder="Ex. Plaquettes de frein avant"
          >


          <!-- CATEGORIE -->

          <label>
            Catégorie
          </label>

          <select
            id="productCategory"
            required
          >

            <option value="">
              Choisir une catégorie
            </option>

            ${PART_CATEGORIES.map(category => `
              <option value="${category}">
                ${category}
              </option>
            `).join("")}

          </select>


          <!-- MARQUE DE LA PIECE -->

          <label>
            Marque de la pièce
          </label>

          <input
            id="productPartBrand"
            class="input"
            type="text"
            required
            placeholder="Ex. Brembo"
          >


          <!-- PHOTOS -->

          <label>
            Photos de la pièce
          </label>

          <div class="photo-upload">

            <input
              id="productImages"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              required
            >

            <p class="muted">
              Ajoute jusqu'à 5 photos.
            </p>

            <div
              id="productImagePreview"
              class="photo-grid"
            ></div>

          </div>


          <!-- VEHICULE -->

          <h3>
            Véhicule compatible
          </h3>

          <div class="vehicle-selector">

            <label>
              Marque
            </label>

            <select
              id="vehicleBrand"
              required
              onchange="vehicleBrandChanged(this.value)"
            >

              <option value="">
                Choisir une marque
              </option>

              ${VEHICLE_BRANDS.map(brand => `
                <option value="${brand}">
                  ${getBrandLabel(brand)}
                </option>
              `).join("")}

            </select>


            <label>
              Modèle
            </label>

            <select
              id="vehicleModel"
              required
            >

              <option value="">
                Choisir un modèle
              </option>

            </select>


            <label>
              Année
            </label>

            <select
              id="vehicleYear"
              required
            >

              <option value="">
                Choisir une année
              </option>

            </select>


            <label>
              Motorisation
            </label>

            <select
              id="vehicleEngine"
              required
            >

              <option value="">
                Choisir une motorisation
              </option>

            </select>

          </div>


          <!-- REFERENCE -->

          <label>
            Référence constructeur
          </label>

          <input
            id="productReference"
            class="input"
            type="text"
            placeholder="Ex. 0986424795"
          >


          <!-- ETAT -->

          <label>
            État de la pièce
          </label>

          <select
            id="productCondition"
            required
          >

            <option value="">
              Choisir
            </option>

            <option value="Neuf">
              Neuf
            </option>

            <option value="Occasion">
              Occasion
            </option>

            <option value="Reconditionné">
              Reconditionné
            </option>

          </select>


          <!-- PRIX -->

          <label>
            Prix de vente (€)
          </label>

          <input
            id="productPrice"
            class="input"
            type="number"
            min="0.01"
            step="0.01"
            required
            placeholder="69.90"
          >


          <!-- STOCK -->

          <label>
            Stock disponible
          </label>

          <input
            id="productStock"
            class="input"
            type="number"
            min="1"
            step="1"
            required
            placeholder="5"
          >


          <!-- DESCRIPTION -->

          <label>
            Description
          </label>

          <textarea
            id="productDescription"
            class="input"
            rows="5"
            placeholder="Décris précisément la pièce..."
          ></textarea>


          <br>

          <button
            class="btn primary"
            type="submit"
          >
            Publier la pièce
          </button>

        </form>

      </div>

    </section>

  `;
}


/* =========================================================
   APERCU DES PHOTOS
   ========================================================= */

function prepareProductImages() {

  const input =
    document.querySelector(
      "#productImages"
    );

  const preview =
    document.querySelector(
      "#productImagePreview"
    );

  if (!input || !preview) {
    return;
  }


  input.addEventListener(
    "change",
    function() {

      preview.innerHTML = "";

      const files =
        Array.from(this.files);


      if (!files.length) {
        return;
      }


      if (files.length > 5) {

        alert(
          "Tu peux ajouter maximum 5 photos."
        );

        this.value = "";

        return;
      }


      files.forEach(
        function(file) {

          if (
            !file.type.startsWith("image/")
          ) {

            return;
          }


          const reader =
            new FileReader();


          reader.onload =
            function(event) {

              const img =
                document.createElement(
                  "img"
                );

              img.src =
                event.target.result;

              img.alt =
                "Photo de la pièce";

              img.style.width =
                "100%";

              img.style.height =
                "160px";

              img.style.objectFit =
                "cover";

              img.style.borderRadius =
                "14px";

              preview.appendChild(img);

            };


          reader.readAsDataURL(file);

        }
      );

    }
  );

}


/* =========================================================
   INITIALISATION DU FORMULAIRE PHOTO
   ========================================================= */

function initProductForm() {

  prepareProductImages();

}


/* =========================================================
   LECTURE DES PHOTOS
   ========================================================= */

function readProductImages(files) {

  return Promise.all(

    Array.from(files)
      .slice(0, 5)
      .map(
        file =>
          new Promise(
            resolve => {

              const reader =
                new FileReader();

              reader.onload =
                event =>
                  resolve(
                    event.target.result
                  );

              reader.readAsDataURL(file);

            }
          )
      )

  );

}/* =========================================================
   AUTOLOOP V0.5 — PUBLICATION PRODUIT
   ========================================================= */

async function publishProduct(event) {

  event.preventDefault();


  /* ---------------------------------------------------------
     VERIFICATION UTILISATEUR
     --------------------------------------------------------- */

  if (!currentUser) {

    alert(
      "Tu dois être connecté en tant que vendeur."
    );

    return;

  }


  /* ---------------------------------------------------------
     RECUPERATION DES CHAMPS
     --------------------------------------------------------- */

  const name =
    document
      .querySelector("#productName")
      .value
      .trim();

  const category =
    document
      .querySelector("#productCategory")
      .value;

  const partBrand =
    document
      .querySelector("#productPartBrand")
      .value
      .trim();

  const reference =
    document
      .querySelector("#productReference")
      .value
      .trim();

  const condition =
    document
      .querySelector("#productCondition")
      .value;

  const price =
    Number(
      document
        .querySelector("#productPrice")
        .value
    );

  const stock =
    Number(
      document
        .querySelector("#productStock")
        .value
    );

  const description =
    document
      .querySelector("#productDescription")
      .value
      .trim();


  /* ---------------------------------------------------------
     VEHICULE
     --------------------------------------------------------- */

  const vehicle =
    getSelectedVehicle();


  if (!vehicle) {

    alert(
      "Sélectionne la marque, le modèle, l'année et la motorisation du véhicule."
    );

    return;

  }


  /* ---------------------------------------------------------
     PHOTOS
     --------------------------------------------------------- */

  const imageInput =
    document.querySelector(
      "#productImages"
    );

  const files =
    imageInput
      ? Array.from(imageInput.files)
      : [];


  if (!files.length) {

    alert(
      "Ajoute au moins une photo de la pièce."
    );

    return;

  }


  if (files.length > 5) {

    alert(
      "Maximum 5 photos par pièce."
    );

    return;

  }


  /* ---------------------------------------------------------
     VERIFICATION PRIX / STOCK
     --------------------------------------------------------- */

  if (
    !Number.isFinite(price) ||
    price <= 0
  ) {

    alert(
      "Le prix doit être supérieur à 0 €."
    );

    return;

  }


  if (
    !Number.isInteger(stock) ||
    stock <= 0
  ) {

    alert(
      "Le stock doit être un nombre entier supérieur à 0."
    );

    return;

  }


  /* ---------------------------------------------------------
     LECTURE DES PHOTOS
     --------------------------------------------------------- */

  let images;

  try {

    images =
      await readProductImages(files);

  } catch (error) {

    console.error(error);

    alert(
      "Impossible de charger les photos."
    );

    return;

  }


  if (!images.length) {

    alert(
      "Impossible de charger les photos."
    );

    return;

  }


  /* ---------------------------------------------------------
     CREATION DU PRODUIT
     --------------------------------------------------------- */

  const product = {

    id:
      createId("product"),

    sellerId:
      currentUser.id,

    seller:
      currentUser.name,

    name:
      name,

    category:
      category,

    partBrand:
      partBrand,

    reference:
      reference,

    condition:
      condition,

    price:
      price,

    stock:
      stock,

    description:
      description,

    vehicle: {

      brand:
        vehicle.brand,

      model:
        vehicle.model,

      year:
        vehicle.year,

      engine:
        vehicle.engine

    },

    images:
      images,

    mainImage:
      images[0],

    createdAt:
      new Date().toISOString(),

    status:
      "published"

  };


  /* ---------------------------------------------------------
     ENREGISTREMENT
     --------------------------------------------------------- */

  products.unshift(
    product
  );

  saveJSON(
    STORAGE_KEYS.PRODUCTS,
    products
  );


  /* ---------------------------------------------------------
     MESSAGE
     --------------------------------------------------------- */

  alert(
    "La pièce a bien été publiée sur AutoLoop."
  );


  /* ---------------------------------------------------------
     RETOUR CATALOGUE
     --------------------------------------------------------- */

  show("catalogue");

}


/* =========================================================
   MODIFICATION DU VEHICULE
   ========================================================= */

function resetVehicleSelector() {

  const model =
    document.querySelector(
      "#vehicleModel"
    );

  const year =
    document.querySelector(
      "#vehicleYear"
    );

  const engine =
    document.querySelector(
      "#vehicleEngine"
    );


  if (model) {

    model.innerHTML = `
      <option value="">
        Choisir un modèle
      </option>
    `;

  }


  if (year) {

    year.innerHTML = `
      <option value="">
        Choisir une année
      </option>
    `;

  }


  if (engine) {

    engine.innerHTML = `
      <option value="">
        Choisir une motorisation
      </option>
    `;

  }

}


/* =========================================================
   VERIFICATION COMPATIBILITE
   ========================================================= */

function isCompatibleVehicle(
  product,
  vehicle
) {

  if (!product || !vehicle) {
    return false;
  }

  return (

    product.vehicle.brand ===
      vehicle.brand &&

    product.vehicle.model ===
      vehicle.model &&

    Number(product.vehicle.year) ===
      Number(vehicle.year) &&

    product.vehicle.engine ===
      vehicle.engine

  );

}


/* =========================================================
   RECHERCHE PAR VEHICULE
   ========================================================= */

function searchByVehicle() {

  const vehicle =
    getSelectedVehicle();

  if (!vehicle) {

    alert(
      "Sélectionne d'abord ton véhicule."
    );

    return;

  }


  const results =
    products.filter(
      product =>
        isCompatibleVehicle(
          product,
          vehicle
        )
    );


  const container =
    document.querySelector(
      "#products"
    );


  if (container) {

    container.innerHTML =
      productCards(results);

  }

}


/* =========================================================
   INITIALISATION APRES AFFICHAGE
   ========================================================= */

function afterPageRender(page) {

  if (
    page === "addproduct"
  ) {

    initProductForm();

  }

}/* =========================================================
   AUTOLOOP V0.5 — CATALOGUE
   ========================================================= */

function productCard(product) {

  const image =
    product.mainImage ||
    (
      product.images &&
      product.images.length
        ? product.images[0]
        : ""
    );


  const photo = image
    ? `
      <img
        src="${image}"
        alt="${escapeHTML(product.name)}"
        class="product-image"
      >
    `
    : `
      <div class="product-image-empty">
        PHOTO NON DISPONIBLE
      </div>
    `;


  const vehicle =
    product.vehicle
      ? `
        ${escapeHTML(product.vehicle.brand)}
        ${escapeHTML(product.vehicle.model)}
        ${product.vehicle.year}
      `
      : "Véhicule non renseigné";


  return `

    <article class="product">

      ${photo}

      <div class="pbody">

        <div class="small">
          ${escapeHTML(product.category || "Pièce auto")}
        </div>

        <h3>
          ${escapeHTML(product.name)}
        </h3>

        <p class="small">
          ${escapeHTML(product.partBrand || "")}
        </p>

        <p class="small">
          ${vehicle}
        </p>

        ${
          product.vehicle?.engine
          ?
          `
            <p class="small">
              ${escapeHTML(
                product.vehicle.engine
              )}
            </p>
          `
          :
          ""
        }

        <div class="price">
          ${money(product.price)}
        </div>

        <p class="small">
          Stock : ${product.stock}
        </p>

        <p class="small">
          Vendeur : ${escapeHTML(product.seller)}
        </p>

        <div class="row">

          <button
            class="btn primary"
            onclick="addToCart('${product.id}')"
          >
            Ajouter
          </button>

          <button
            class="btn"
            onclick="showProduct('${product.id}')"
          >
            Voir
          </button>

        </div>

      </div>

    </article>

  `;
}


/* =========================================================
   LISTE PRODUITS
   ========================================================= */

function productCards(list) {

  if (!list.length) {

    return `
      <div class="empty">

        Aucune pièce ne correspond
        à ta recherche.

      </div>
    `;

  }


  return list
    .map(productCard)
    .join("");

}


/* =========================================================
   CATALOGUE
   ========================================================= */

function cataloguePage() {

  return `

    <section class="wrap">

      <p class="eyebrow">
        AUTOLOOP
      </p>

      <h2>
        Trouve ta pièce
      </h2>


      <div class="card">

        <h3>
          Rechercher par véhicule
        </h3>

        <div class="vehicle-selector">

          <label>
            Marque
          </label>

          <select
            id="searchBrand"
            onchange="searchBrandChanged(this.value)"
          >

            <option value="">
              Choisir une marque
            </option>

            ${VEHICLE_BRANDS.map(brand => `
              <option value="${brand}">
                ${getBrandLabel(brand)}
              </option>
            `).join("")}

          </select>


          <label>
            Modèle
          </label>

          <select
            id="searchModel"
            onchange="searchModelChanged()"
          >

            <option value="">
              Choisir un modèle
            </option>

          </select>


          <label>
            Année
          </label>

          <select
            id="searchYear"
            onchange="searchYearChanged()"
          >

            <option value="">
              Choisir une année
            </option>

          </select>


          <label>
            Motorisation
          </label>

          <select
            id="searchEngine"
          >

            <option value="">
              Toutes les motorisations
            </option>

          </select>

        </div>


        <div class="row">

          <button
            class="btn primary"
            onclick="searchVehicleProducts()"
          >
            Rechercher les pièces
          </button>

          <button
            class="btn"
            onclick="resetSearch()"
          >
            Réinitialiser
          </button>

        </div>

      </div>


      <br>


      <div class="section-title">

        <div>

          <p class="eyebrow">
            PIÈCES DISPONIBLES
          </p>

          <h2>
            Catalogue
          </h2>

        </div>

        <input
          id="productSearch"
          class="input"
          placeholder="Rechercher une pièce..."
          oninput="searchProducts(this.value)"
        >

      </div>


      <div
        id="products"
        class="grid"
      >

        ${productCards(products)}

      </div>

    </section>

  `;

}


/* =========================================================
   RECHERCHE MARQUE
   ========================================================= */

function searchBrandChanged(brand) {

  const model =
    document.querySelector(
      "#searchModel"
    );

  const year =
    document.querySelector(
      "#searchYear"
    );

  const engine =
    document.querySelector(
      "#searchEngine"
    );


  if (!model) return;


  model.innerHTML = `
    <option value="">
      Choisir un modèle
    </option>
  `;


  if (year) {

    year.innerHTML = `
      <option value="">
        Choisir une année
      </option>
    `;

  }


  if (engine) {

    engine.innerHTML = `
      <option value="">
        Toutes les motorisations
      </option>
    `;

  }


  if (!brand) {
    return;
  }


  getModels(brand)
    .forEach(modelKey => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        modelKey;

      option.textContent =
        getModelLabel(
          modelKey,
          VEHICLES[brand][modelKey]
        );

      model.appendChild(option);

    });

}


/* =========================================================
   RECHERCHE MODELE
   ========================================================= */

function searchModelChanged() {

  const brand =
    document.querySelector(
      "#searchBrand"
    )?.value;

  const model =
    document.querySelector(
      "#searchModel"
    )?.value;

  const year =
    document.querySelector(
      "#searchYear"
    );

  const engine =
    document.querySelector(
      "#searchEngine"
    );


  if (!year) return;


  year.innerHTML = `
    <option value="">
      Choisir une année
    </option>
  `;


  if (engine) {

    engine.innerHTML = `
      <option value="">
        Toutes les motorisations
      </option>
    `;

  }


  if (!brand || !model) {
    return;
  }


  getYears(
    brand,
    model
  )
    .forEach(yearValue => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        yearValue;

      option.textContent =
        yearValue;

      year.appendChild(option);

    });

}


/* =========================================================
   RECHERCHE ANNEE
   ========================================================= */

function searchYearChanged() {

  const brand =
    document.querySelector(
      "#searchBrand"
    )?.value;

  const model =
    document.querySelector(
      "#searchModel"
    )?.value;

  const engine =
    document.querySelector(
      "#searchEngine"
    );


  if (!engine) return;


  engine.innerHTML = `
    <option value="">
      Toutes les motorisations
    </option>
  `;


  if (!brand || !model) {
    return;
  }


  getEngines(
    brand,
    model
  )
    .forEach(engineValue => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        engineValue;

      option.textContent =
        engineValue;

      engine.appendChild(option);

    });

}


/* =========================================================
   RECHERCHE VEHICULE
   ========================================================= */

function searchVehicleProducts() {

  const brand =
    document.querySelector(
      "#searchBrand"
    )?.value;

  const model =
    document.querySelector(
      "#searchModel"
    )?.value;

  const year =
    document.querySelector(
      "#searchYear"
    )?.value;

  const engine =
    document.querySelector(
      "#searchEngine"
    )?.value;


  if (!brand || !model || !year) {

    alert(
      "Choisis au minimum la marque, le modèle et l'année."
    );

    return;

  }


  const results =
    products.filter(
      product => {

        if (!product.vehicle) {
          return false;
        }


        if (
          product.vehicle.brand !==
          getBrandLabel(brand)
        ) {

          return false;

        }


        if (
          product.vehicle.model !==
          getModelLabel(
            model,
            VEHICLES[brand][model]
          )
        ) {

          return false;

        }


        if (
          Number(product.vehicle.year) !==
          Number(year)
        ) {

          return false;

        }


        if (
          engine &&
          product.vehicle.engine !==
          engine
        ) {

          return false;

        }


        return true;

      }
    );


  const container =
    document.querySelector(
      "#products"
    );


  if (container) {

    container.innerHTML =
      productCards(results);

  }

}


/* =========================================================
   RECHERCHE TEXTE
   ========================================================= */

function searchProducts(query) {

  const value =
    query
      .trim()
      .toLowerCase();


  if (!value) {

    const container =
      document.querySelector(
        "#products"
      );

    if (container) {
      container.innerHTML =
        productCards(products);
    }

    return;

  }


  const results =
    products.filter(
      product => {

        const text = [

          product.name,

          product.category,

          product.partBrand,

          product.reference,

          product.description,

          product.seller,

          product.vehicle?.brand,

          product.vehicle?.model,

          product.vehicle?.engine

        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();


        return text.includes(value);

      }
    );


  const container =
    document.querySelector(
      "#products"
    );


  if (container) {

    container.innerHTML =
      productCards(results);

  }

}


/* =========================================================
   RESET RECHERCHE
   ========================================================= */

function resetSearch() {

  const ids = [
    "#searchBrand",
    "#searchModel",
    "#searchYear",
    "#searchEngine",
    "#productSearch"
  ];


  ids.forEach(selector => {

    const element =
      document.querySelector(selector);

    if (!element) return;


    if (
      selector ===
      "#searchModel"
    ) {

      element.innerHTML = `
        <option value="">
          Choisir un modèle
        </option>
      `;

      return;

    }


    if (
      selector ===
      "#searchYear"
    ) {

      element.innerHTML = `
        <option value="">
          Choisir une année
        </option>
      `;

      return;

    }


    if (
      selector ===
      "#searchEngine"
    ) {

      element.innerHTML = `
        <option value="">
          Toutes les motorisations
        </option>
      `;

      return;

    }


    element.value = "";

  });


  const container =
    document.querySelector(
      "#products"
    );


  if (container) {

    container.innerHTML =
      productCards(products);

  }

}


/* =========================================================
   FICHE PRODUIT
   ========================================================= */

function showProduct(id) {

  const product =
    products.find(
      item =>
        String(item.id) ===
        String(id)
    );


  if (!product) {

    alert(
      "Produit introuvable."
    );

    return;

  }


  const images =
    product.images || [];


  const mainImage =
    product.mainImage ||
    images[0] ||
    "";


  const gallery =
    images
      .map(
        image => `
          <img
            src="${image}"
            alt="${escapeHTML(product.name)}"
            class="gallery-image"
          >
        `
      )
      .join("");


  const vehicle =
    product.vehicle
      ? `
        <p>
          <strong>
            Véhicule :
          </strong>

          ${escapeHTML(
            product.vehicle.brand
          )}

          ${escapeHTML(
            product.vehicle.model
          )}

          ${product.vehicle.year}
        </p>

        <p>
          <strong>
            Motorisation :
          </strong>

          ${escapeHTML(
            product.vehicle.engine
          )}
        </p>
      `
      : "";


  const container =
    document.querySelector(
      "#app"
    );


  if (!container) return;


  container.innerHTML = `

    <section class="wrap">

      <button
        class="btn"
        onclick="show('catalogue')"
      >
        ← Retour au catalogue
      </button>


      <div class="product-detail">


        <div>

          ${
            mainImage
            ?
            `
              <img
                src="${mainImage}"
                alt="${escapeHTML(product.name)}"
                style="
                  width:100%;
                  max-height:500px;
                  object-fit:contain;
                  border-radius:20px;
                "
              >
            `
            :
            `
              <div class="product-image-empty">
                PHOTO NON DISPONIBLE
              </div>
            `
          }


          ${
            gallery
            ?
            `
              <div class="gallery">
                ${gallery}
              </div>
            `
            :
            ""
          }

        </div>


        <div class="card">

          <p class="eyebrow">
            ${escapeHTML(
              product.category ||
              "PIÈCE AUTO"
            )}
          </p>


          <h1>
            ${escapeHTML(
              product.name
            )}
          </h1>


          <p>
            <strong>
              Marque :
            </strong>

            ${escapeHTML(
              product.partBrand
            )}
          </p>


          ${
            product.reference
            ?
            `
              <p>
                <strong>
                  Référence :
                </strong>

                ${escapeHTML(
                  product.reference
                )}
              </p>
            `
            :
            ""
          }


          ${vehicle}


          <p>
            <strong>
              État :
            </strong>

            ${escapeHTML(
              product.condition
            )}
          </p>


          <p>
            <strong>
              Vendeur :
            </strong>

            ${escapeHTML(
              product.seller
            )}
          </p>


          <div class="price">
            ${money(product.price)}
          </div>


          <p>
            Stock :
            ${product.stock}
          </p>


          ${
            product.description
            ?
            `
              <div class="notice">
                ${escapeHTML(
                  product.description
                )}
              </div>
            `
            :
            ""
          }


          <button
            class="btn primary"
            onclick="addToCart('${product.id}')"
          >
            Ajouter au panier
          </button>

        </div>

      </div>

    </section>

  `;

}


/* =========================================================
   SECURITE HTML
   ========================================================= */

function escapeHTML(value) {

  return String(
    value ?? ""
  )
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}/* =========================================================
   AUTOLOOP V0.5 — UTILITAIRES
   ========================================================= */

function money(value) {

  return Number(value || 0).toLocaleString(
    "fr-FR",
    {
      style: "currency",
      currency: "EUR"
    }
  );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function show(page) {

  const app =
    document.querySelector("#app");

  if (!app) {
    return;
  }


  switch (page) {

    case "home":
      app.innerHTML = homePage();
      break;

    case "catalogue":
      app.innerHTML = cataloguePage();
      break;

    case "sell":
      app.innerHTML = sellerRegisterPage();
      break;

    case "login":
      app.innerHTML = loginPage();
      break;

    case "verify":
      app.innerHTML = verificationPage();
      break;

    case "dashboard":
      app.innerHTML = dashboardPage();
      break;

    case "addproduct":
      app.innerHTML = addProductPage();
      break;

    case "cart":
      app.innerHTML = cartPage();
      break;

    default:
      app.innerHTML = homePage();

  }


  updateCartCount();


  if (page === "addproduct") {
    setTimeout(
      initProductForm,
      0
    );
  }

}


/* =========================================================
   ACCUEIL
   ========================================================= */

function homePage() {

  return `

    <section class="wrap hero">

      <p class="eyebrow">
        AUTOLOOP
      </p>

      <h1>
        La bonne pièce.
        <br>
        <span>
          Pour la bonne voiture.
        </span>
      </h1>

      <p class="lead">
        Trouve des pièces automobiles
        adaptées à ton véhicule.
      </p>


      <div class="card">

        <h3>
          Rechercher mon véhicule
        </h3>

        <div class="vehicle-selector">

          <label>
            Marque
          </label>

          <select
            id="homeBrand"
            onchange="homeBrandChanged(this.value)"
          >

            <option value="">
              Choisir une marque
            </option>

            ${VEHICLE_BRANDS.map(
              brand => `
                <option value="${brand}">
                  ${getBrandLabel(brand)}
                </option>
              `
            ).join("")}

          </select>


          <label>
            Modèle
          </label>

          <select
            id="homeModel"
            onchange="homeModelChanged()"
          >

            <option value="">
              Choisir un modèle
            </option>

          </select>


          <label>
            Année
          </label>

          <select
            id="homeYear"
          >

            <option value="">
              Choisir une année
            </option>

          </select>

        </div>


        <button
          class="btn primary"
          onclick="homeSearch()"
        >
          Rechercher les pièces
        </button>

      </div>


      <div class="hero-actions">

        <button
          class="btn dark"
          onclick="show('sell')"
        >
          Devenir vendeur
        </button>

        <button
          class="btn"
          onclick="show('catalogue')"
        >
          Voir le catalogue
        </button>

      </div>

    </section>

  `;

}


function homeBrandChanged(brand) {

  const model =
    document.querySelector(
      "#homeModel"
    );

  const year =
    document.querySelector(
      "#homeYear"
    );


  if (!model) return;


  model.innerHTML = `
    <option value="">
      Choisir un modèle
    </option>
  `;


  if (year) {

    year.innerHTML = `
      <option value="">
        Choisir une année
      </option>
    `;

  }


  if (!brand) return;


  getModels(brand)
    .forEach(
      modelKey => {

        const option =
          document.createElement(
            "option"
          );

        option.value =
          modelKey;

        option.textContent =
          getModelLabel(
            modelKey,
            VEHICLES[brand][modelKey]
          );

        model.appendChild(option);

      }
    );

}


function homeModelChanged() {

  const brand =
    document.querySelector(
      "#homeBrand"
    )?.value;

  const model =
    document.querySelector(
      "#homeModel"
    )?.value;

  const year =
    document.querySelector(
      "#homeYear"
    );


  if (!year) return;


  year.innerHTML = `
    <option value="">
      Choisir une année
    </option>
  `;


  if (!brand || !model) return;


  getYears(
    brand,
    model
  )
    .forEach(
      yearValue => {

        const option =
          document.createElement(
            "option"
          );

        option.value =
          yearValue;

        option.textContent =
          yearValue;

        year.appendChild(option);

      }
    );

}


function homeSearch() {

  const brand =
    document.querySelector(
      "#homeBrand"
    )?.value;

  const model =
    document.querySelector(
      "#homeModel"
    )?.value;

  const year =
    document.querySelector(
      "#homeYear"
    )?.value;


  if (!brand || !model || !year) {

    alert(
      "Choisis la marque, le modèle et l'année."
    );

    return;

  }


  show("catalogue");


  setTimeout(
    function() {

      const brandSelect =
        document.querySelector(
          "#searchBrand"
        );

      if (!brandSelect) return;


      brandSelect.value =
        brand;

      searchBrandChanged(brand);


      const modelSelect =
        document.querySelector(
          "#searchModel"
        );

      if (!modelSelect) return;


      modelSelect.value =
        model;

      searchModelChanged();


      const yearSelect =
        document.querySelector(
          "#searchYear"
        );

      if (!yearSelect) return;


      yearSelect.value =
        year;


      searchYearChanged();

      searchVehicleProducts();

    },
    50
  );

}


/* =========================================================
   COMPTE VENDEUR
   ========================================================= */

function sellerRegisterPage() {

  return `

    <section class="wrap">

      <div class="auth">

        <p class="eyebrow">
          VENDEUR PROFESSIONNEL
        </p>

        <h2>
          Créer mon compte vendeur
        </h2>


        <form
          class="card form"
          onsubmit="registerSeller(event)"
        >

          <label>
            Nom de l'entreprise
          </label>

          <input
            id="sellerName"
            class="input"
            required
            placeholder="Auto Pièces 94"
          >


          <label>
            Email
          </label>

          <input
            id="sellerEmail"
            class="input"
            type="email"
            required
            placeholder="contact@entreprise.fr"
          >


          <label>
            Téléphone
          </label>

          <input
            id="sellerPhone"
            class="input"
            type="tel"
            required
            placeholder="06 12 34 56 78"
          >


          <label>
            Ville
          </label>

          <input
            id="sellerCity"
            class="input"
            required
            placeholder="Paris"
          >


          <label>
            Mot de passe
          </label>

          <input
            id="sellerPassword"
            class="input"
            type="password"
            minlength="8"
            required
            placeholder="8 caractères minimum"
          >


          <br>

          <button
            class="btn primary"
            type="submit"
          >
            Créer mon compte
          </button>

        </form>


        <p>
          Déjà vendeur ?

          <span
            class="smalllink"
            onclick="show('login')"
          >
            Se connecter
          </span>
        </p>

      </div>

    </section>

  `;

}


async function registerSeller(event) {

  event.preventDefault();


  const name =
    document.querySelector(
      "#sellerName"
    ).value.trim();

  const email =
    document.querySelector(
      "#sellerEmail"
    ).value.trim().toLowerCase();

  const phone =
    document.querySelector(
      "#sellerPhone"
    ).value.trim();

  const city =
    document.querySelector(
      "#sellerCity"
    ).value.trim();

  const password =
    document.querySelector(
      "#sellerPassword"
    ).value;


  if (
    currentUser &&
    currentUser.email === email
  ) {

    alert(
      "Ce compte existe déjà."
    );

    return;

  }


  const passwordHash =
    await hashPassword(
      password
    );


  const user = {

    id:
      createId("seller"),

    name:
      name,

    email:
      email,

    phone:
      phone,

    city:
      city,

    passwordHash:
      passwordHash,

    emailVerified:
      false,

    phoneVerified:
      false

  };


  const emailCode =
    String(
      Math.floor(
        100000 +
        Math.random() * 900000
      )
    );


  const phoneCode =
    String(
      Math.floor(
        100000 +
        Math.random() * 900000
      )
    );


  user.emailCode =
    emailCode;

  user.phoneCode =
    phoneCode;


  currentUser =
    user;


  saveJSON(
    STORAGE_KEYS.USER,
    currentUser
  );


  show("verify");

}


/* =========================================================
   VERIFICATION
   ========================================================= */

function verificationPage() {

  if (!currentUser) {
    return sellerRegisterPage();
  }


  return `

    <section class="wrap">

      <div class="auth">

        <p class="eyebrow">
          SÉCURITÉ
        </p>

        <h2>
          Vérification du compte
        </h2>

        <div class="notice">

          Prototype :

          <br><br>

          <strong>
            Code email :
            ${currentUser.emailCode}
          </strong>

          <br><br>

          <strong>
            Code téléphone :
            ${currentUser.phoneCode}
          </strong>

        </div>


        <div class="card form">

          <label>
            Code email
          </label>

          <input
            id="verifyEmail"
            class="input"
            inputmode="numeric"
            maxlength="6"
          >


          <label>
            Code téléphone
          </label>

          <input
            id="verifyPhone"
            class="input"
            inputmode="numeric"
            maxlength="6"
          >


          <br>

          <button
            class="btn primary"
            onclick="verifySeller()"
          >
            Vérifier mon compte
          </button>

        </div>

      </div>

    </section>

  `;

}


function verifySeller() {

  const emailCode =
    document.querySelector(
      "#verifyEmail"
    )?.value.trim();

  const phoneCode =
    document.querySelector(
      "#verifyPhone"
    )?.value.trim();


  if (
    emailCode !==
      currentUser.emailCode ||

    phoneCode !==
      currentUser.phoneCode
  ) {

    alert(
      "Un des deux codes est incorrect."
    );

    return;

  }


  currentUser.emailVerified =
    true;

  currentUser.phoneVerified =
    true;


  saveJSON(
    STORAGE_KEYS.USER,
    currentUser
  );


  alert(
    "Compte vérifié avec succès."
  );


  show("dashboard");

}


/* =========================================================
   CONNEXION
   ========================================================= */

function loginPage() {

  return `

    <section class="wrap">

      <div class="auth">

        <p class="eyebrow">
          VENDEUR
        </p>

        <h2>
          Connexion
        </h2>


        <form
          class="card form"
          onsubmit="loginSeller(event)"
        >

          <label>
            Email
          </label>

          <input
            id="loginEmail"
            class="input"
            type="email"
            required
          >


          <label>
            Mot de passe
          </label>

          <input
            id="loginPassword"
            class="input"
            type="password"
            required
          >


          <br>

          <button
            class="btn primary"
            type="submit"
          >
            Se connecter
          </button>

        </form>


        <p>

          Pas encore de compte ?

          <span
            class="smalllink"
            onclick="show('sell')"
          >
            Créer un compte
          </span>

        </p>

      </div>

    </section>

  `;

}


async function loginSeller(event) {

  event.preventDefault();


  const email =
    document.querySelector(
      "#loginEmail"
    ).value.trim().toLowerCase();


  const password =
    document.querySelector(
      "#loginPassword"
    ).value;


  const passwordHash =
    await hashPassword(
      password
    );


  const savedUser =
    loadJSON(
      STORAGE_KEYS.USER,
      null
    );


  if (
    !savedUser ||
    savedUser.email !== email ||
    savedUser.passwordHash !== passwordHash
  ) {

    alert(
      "Email ou mot de passe incorrect."
    );

    return;

  }


  currentUser =
    savedUser;


  if (
    !currentUser.emailVerified ||
    !currentUser.phoneVerified
  ) {

    show("verify");

    return;

  }


  show("dashboard");

}


/* =========================================================
   TABLEAU DE BORD
   ========================================================= */

function dashboardPage() {

  if (!currentUser) {
    return loginPage();
  }


  const myProducts =
    products.filter(
      product =>
        product.sellerId ===
        currentUser.id
    );


  return `

    <section class="wrap">

      <div class="seller-head">

        <div>

          <p class="eyebrow">
            ESPACE VENDEUR
          </p>

          <h2>
            ${escapeHTML(
              currentUser.name
            )}
          </h2>

          <p class="muted">
            ${escapeHTML(
              currentUser.email
            )}
          </p>

          <p>

            <span class="pill">
              Email vérifié ✓
            </span>

            <span class="pill">
              Téléphone vérifié ✓
            </span>

          </p>

        </div>


        <button
          class="btn"
          onclick="logoutSeller()"
        >
          Déconnexion
        </button>

      </div>


      <div class="two">

        <div class="card">

          <h3>
            Mes pièces
          </h3>

          <div class="total">
            ${myProducts.length}
          </div>

          <button
            class="btn primary"
            onclick="show('addproduct')"
          >
            + Ajouter une pièce
          </button>

        </div>


        <div class="card">

          <h3>
            Mes commandes
          </h3>

          <div class="total">
            ${
              orders.filter(
                order =>
                  order.sellerId ===
                  currentUser.id
              ).length
            }
          </div>

        </div>

      </div>


      <br>

      <h3>
        Mes pièces publiées
      </h3>


      ${
        myProducts.length
        ?
        `
          <div class="grid">

            ${productCards(
              myProducts
            )}

          </div>
        `
        :
        `
          <div class="empty">

            Tu n'as encore publié
            aucune pièce.

          </div>
        `
      }

    </section>

  `;

}


function logoutSeller() {

  currentUser = null;

  localStorage.removeItem(
    STORAGE_KEYS.USER
  );

  show("home");

}


/* =========================================================
   PANIER
   ========================================================= */

function addToCart(id) {

  const product =
    products.find(
      item =>
        String(item.id) ===
        String(id)
    );


  if (!product) {

    alert(
      "Pièce introuvable."
    );

    return;

  }


  if (
    Number(product.stock) <= 0
  ) {

    alert(
      "Cette pièce est en rupture de stock."
    );

    return;

  }


  const existing =
    cart.find(
      item =>
        String(item.productId) ===
        String(id)
    );


  if (existing) {

    if (
      existing.quantity >=
      product.stock
    ) {

      alert(
        "Stock maximum atteint."
      );

      return;

    }


    existing.quantity++;

  } else {

    cart.push({

      productId:
        product.id,

      quantity:
        1

    });

  }


  saveJSON(
    STORAGE_KEYS.CART,
    cart
  );


  updateCartCount();


  alert(
    "Pièce ajoutée au panier."
  );

}


function updateCartCount() {

  const count =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );


  document
    .querySelectorAll(
      "#cartCount"
    )
    .forEach(
      element =>
        element.textContent =
          count
    );

}


function cartPage() {

  let total = 0;


  const rows =
    cart.map(
      item => {

        const product =
          products.find(
            product =>
              String(product.id) ===
              String(item.productId)
          );


        if (!product) {
          return "";
        }


        const line =
          product.price *
          item.quantity;


        total += line;


        return `

          <div class="card">

            <h3>
              ${escapeHTML(
                product.name
              )}
            </h3>

            <p>
              ${escapeHTML(
                product.seller
              )}
            </p>

            <p>
              Quantité :
              ${item.quantity}
            </p>

            <strong>
              ${money(line)}
            </strong>

            <br><br>

            <button
              class="btn"
              onclick="removeFromCart('${product.id}')"
            >
              Supprimer
            </button>

          </div>

        `;

      }
    ).join("");


  return `

    <section class="wrap">

      <p class="eyebrow">
        AUTOLOOP
      </p>

      <h2>
        Mon panier
      </h2>


      ${
        rows
        ?
        `
          ${rows}

          <div class="card">

            <h3>
              Total
            </h3>

            <div class="total">
              ${money(total)}
            </div>

            <button
              class="btn primary"
              onclick="createOrder()"
            >
              Passer la commande
            </button>

          </div>
        `
        :
        `
          <div class="empty">
            Ton panier est vide.
          </div>
        `
      }

    </section>

  `;

}


function removeFromCart(id) {

  cart =
    cart.filter(
      item =>
        String(item.productId) !==
        String(id)
    );


  saveJSON(
    STORAGE_KEYS.CART,
    cart
  );


  show("cart");

}


function createOrder() {

  if (!cart.length) {

    alert(
      "Ton panier est vide."
    );

    return;

  }


  const orderId =
    createId("order");


  let total = 0;


  cart.forEach(
    item => {

      const product =
        products.find(
          product =>
            String(product.id) ===
            String(item.productId)
        );


      if (!product) return;


      total +=
        product.price *
        item.quantity;


      product.stock =
        Math.max(
          0,
          product.stock -
          item.quantity
        );

    }
  );


  const order = {

    id:
      orderId,

    customer:
      "Client prototype",

    total:
      total,

    items:
      [...cart],

    date:
      new Date().toISOString(),

    status:
      "Commande créée"

  };


  orders.unshift(
    order
  );


  cart = [];


  saveJSON(
    STORAGE_KEYS.PRODUCTS,
    products
  );

  saveJSON(
    STORAGE_KEYS.ORDERS,
    orders
  );

  saveJSON(
    STORAGE_KEYS.CART,
    cart
  );


  alert(
    "Commande créée.\n\n" +
    "Le paiement sera ajouté dans une prochaine étape."
  );


  show("home");

}


/* =========================================================
   HASH MOT DE PASSE
   ========================================================= */

async function hashPassword(value) {

  const data =
    new TextEncoder()
      .encode(value);


  const buffer =
    await crypto.subtle.digest(
      "SHA-256",
      data
    );


  return Array
    .from(
      new Uint8Array(buffer)
    )
    .map(
      byte =>
        byte
          .toString(16)
          .padStart(2, "0")
    )
    .join("");

}


/* =========================================================
   INITIALISATION
   ========================================================= */

function initAutoLoop() {

  const app =
    document.querySelector(
      "#app"
    );


  if (!app) {

    console.error(
      "AUTOLOOP : élément #app introuvable."
    );

    return;

  }


  show("home");

  updateCartCount();


  console.log(
    "AUTOLOOP V0.5 prêt."
  );

}


/* =========================================================
   DEMARRAGE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initAutoLoop
);
