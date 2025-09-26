// slide data 0 to 18;
// first layer is key: return object library
// second layer key will return a list of objects.

var structure_list = ["cistern", "muscle", "orbit", "ventricles", "vesselsNerve", "brainStructure"];
var structure_display = {0: true, 1: true, 2: true, 3: true, 4: true, 5: true};
var structure_color = {0: [255, 99, 71], 1:[0, 64, 255], 2: [127,255,0], 3:[0, 102, 153], 4:[153, 153, 255], 5:[189, 219, 219]};
var checkboxes = ["#cisternBox", "#muscleBox","#orbitBox", "#ventricleBox", "#vesselBox", "#brainBox"];

var whole_test_list = [];



var slice_data = {
    0: {
        cistern: [],
        cortex: [],
        muscle:[{
            label: "Longus capitis muscle",
            pos_x: -16,
            pos_y: 0,
          text_pos_x: -190,
            text_pos_y: 60,
            text_align: "RIGHT"
        },
        {
            label: "Medial pterygoid muscle",
            pos_x: -58,
            pos_y: -30,
          text_pos_x: -190,
            text_pos_y: 30,
            text_align: "RIGHT"
        },
        {
            label: "Lateral pterygoid muscle",
            pos_x: -90,
            pos_y: -30,
          text_pos_x: -190,
            text_pos_y: 0,
            text_align: "RIGHT"
        },
        {
            label: "Temporalis muscle",
            pos_x: -90,
            pos_y: -70,
          text_pos_x: -190,
            text_pos_y: -30,
            text_align: "RIGHT"
        },
        {
            label: "Masseter muscle",
            pos_x: 150,
            pos_y: -84,
            text_pos_x: 200,
            text_pos_y: -150,
            text_align: "LEFT"
        },
        {
            label: "Sternocleidomastoid muscle",
            pos_x: 140,
            pos_y: 125,
            text_pos_x: 200,
            text_pos_y: 150,
            text_align: "LEFT"
        },
        {
            label: "Semispinalis capitis muscle",
            pos_x: 40,
            pos_y: 205,
            text_pos_x: 200,
            text_pos_y: 270,
            text_align: "LEFT"
        },
        {
            label: "Splenius capitis muscle",
            pos_x: -60,
            pos_y: 140,
          text_pos_x: -190,
            text_pos_y: 270,
            text_align: "RIGHT"
        }        
        ],
        orbit: [],
        ventricles: [],
        vesselsNerve:[
            {
                label: "Vertebral artery",
                pos_x: -13,
                pos_y: 80,
              text_pos_x: -190,
                text_pos_y: 240,
                text_align: "RIGHT"
            },
            {
                label: "Internal carotid artery",
                pos_x: 72,
                pos_y: 24,
                text_pos_x: 200,
                text_pos_y: 120,
                text_align: "LEFT"
            }
        ],
        brainStructure:[]
    },
    1: {
        cistern: [],
        cortex: [],
        muscle:[
            {
                label: "Longus capitis muscle",
                pos_x: -20,
                pos_y: 0,
              text_pos_x: -190,
                text_pos_y: 60,
                text_align: "RIGHT"
            },
            {
                label: "Medial pterygoid muscle",
                pos_x: -48,
                pos_y: -40,
              text_pos_x: -190,
                text_pos_y: 30,
                text_align: "RIGHT"
            },
            {
                label: "Lateral pterygoid muscle",
                pos_x: -90,
                pos_y: -35,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Temporalis muscle",
                pos_x: -90,
                pos_y: -75,
              text_pos_x: -190,
                text_pos_y: -30,
                text_align: "RIGHT"
            },
            {
                label: "Masseter muscle",
                pos_x: 140,
                pos_y: -84,
                text_pos_x: 200,
                text_pos_y: -150,
                text_align: "LEFT"
            },
            {
                label: "Sternocleidomastoid muscle",
                pos_x: 145,
                pos_y: 125,
                text_pos_x: 200,
                text_pos_y: 150,
                text_align: "LEFT"
            },
            {
                label: "Semispinalis capitis muscle",
                pos_x: 40,
                pos_y: 215,
                text_pos_x: 200,
                text_pos_y: 270,
                text_align: "LEFT"
            },
            {
                label: "Splenius capitis muscle",
                pos_x: -80,
                pos_y: 160,
              text_pos_x: -190,
                text_pos_y: 270,
                text_align: "RIGHT"
            }       
        ],
        orbit: [],
        ventricles: [],
        vesselsNerve:[            
        {
            label: "Vertebral artery",
            pos_x: -8,
            pos_y: 74,
          text_pos_x: -190,
            text_pos_y: 240,
            text_align: "RIGHT"
        },
        {
            label: "Internal carotid artery",
            pos_x: 73,
            pos_y: 25,
            text_pos_x: 200,
            text_pos_y: 120,
            text_align: "LEFT"
        }],
        brainStructure:[]
    },
    2: {
        cistern: [],
        cortex: [],
        muscle:[
            {
                label: "Medial pterygoid muscle",
                pos_x: -45,
                pos_y: -45,
              text_pos_x: -190,
                text_pos_y: 30,
                text_align: "RIGHT"
            },
            {
                label: "Lateral pterygoid muscle",
                pos_x: -90,
                pos_y: -35,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Temporalis muscle",
                pos_x: -95,
                pos_y: -75,
              text_pos_x: -190,
                text_pos_y: -30,
                text_align: "RIGHT"
            },
            {
                label: "Masseter muscle",
                pos_x: 150,
                pos_y: -74,
                text_pos_x: 200,
                text_pos_y: -150,
                text_align: "LEFT"
            },
            {
                label: "Sternocleidomastoid muscle",
                pos_x: 130,
                pos_y: 155,
                text_pos_x: 200,
                text_pos_y: 210,
                text_align: "LEFT"
            },
            {
                label: "Semispinalis capitis muscle",
                pos_x: 40,
                pos_y: 220,
                text_pos_x: 200,
                text_pos_y: 270,
                text_align: "LEFT"
            }
        ],
        orbit: [],
        ventricles: [],
        vesselsNerve:[
            {
                label: "Vertebral artery",
                pos_x: -8,
                pos_y: 65,
              text_pos_x: -190,
                text_pos_y: 240,
                text_align: "RIGHT"
            },
            {
                label: "Internal carotid artery",
                pos_x: 75,
                pos_y: 25,
                text_pos_x: 200,
                text_pos_y: 120,
                text_align: "LEFT"
            }
        ],
        brainStructure:[]
    },
    3: {
        cistern: [],
        cortex: [],
        muscle: [
            {
                label: "Lateral pterygoid muscle",
                pos_x: -90,
                pos_y: -35,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Temporalis muscle",
                pos_x: -95,
                pos_y: -85,
              text_pos_x: -190,
                text_pos_y: -30,
                text_align: "RIGHT"
            },
            {
                label: "Masseter muscle",
                pos_x: 150,
                pos_y: -74,
                text_pos_x: 200,
                text_pos_y: -150,
                text_align: "LEFT"
            },
            {
                label: "Semispinalis capitis muscle",
                pos_x: 40,
                pos_y: 225,
                text_pos_x: 200,
                text_pos_y: 270,
                text_align: "LEFT"
            }
        ],
        orbit: [],
        ventricles: [],
        vesselsNerve:[
            {
                label: "Vertebral artery",
                pos_x: -2,
                pos_y: 38,
              text_pos_x: -190,
                text_pos_y: 150,
                text_align: "RIGHT"
            }
        ],
        brainStructure:[]
    },
    4: {
        cistern: [{
            label: "Cerebellomedullary Cistern",
            pos_x: 12,
            pos_y: 35,
          text_pos_x: -190,
            text_pos_y: -150,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[
            {
                label: "Sigmoid Sinus",
                pos_x: -130,
                pos_y: 95,
                text_pos_x: -210,
                text_pos_y: 180,
                text_align: "RIGHT"
            }
        ],
        brainStructure:[
            {
                label: "Medulla oblongata",
                pos_x: 10,
                pos_y: 70,
                text_pos_x: 200,
                text_pos_y: 0,
                text_align: "LEFT"
            }
        ]
    },
    5: {
        cistern: [{
            label: "Prepontine Cistern",
            pos_x: 4,
            pos_y: 16,
          text_pos_x: -190,
            text_pos_y: -150,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [
            {
                label: "Semicircular canal",
                pos_x: 110,
                pos_y: 40,
                text_pos_x: 200,
                text_pos_y: -90,
                text_align: "LEFT"
            },
            {
                label: "Cochlea",
                pos_x: -84,
                pos_y: 30,
                text_pos_x: -210,
                text_pos_y: -60,
                text_align: "RIGHT"
            }
        ],
        ventricles: [{
            label: "Fourth Ventricle",
            pos_x: 8,
            pos_y: 84,
            text_pos_x: 200,
            text_pos_y: 150,
            text_align: "LEFT"
        }],
        vesselsNerve:[
            {
                label: "Abducens nerve",
                pos_x: -14,
                pos_y: 22,
              text_pos_x: -190,
                text_pos_y: -120,
                text_align: "RIGHT"
            },
            {
                label: "Facial nerve",
                pos_x: 62,
                pos_y: 45,
                text_pos_x: 200,
                text_pos_y: -150,
                text_align: "LEFT"
            },
            {
                label: "Vestibulocochlear nerve",
                pos_x: 65,
                pos_y: 50,
                text_pos_x: 200,
                text_pos_y: -120,
                text_align: "LEFT"
            },
            {
                label: "Anterior inferior cerebellar artery",
                pos_x: -40,
                pos_y: 40,
                text_pos_x: -210,
                text_pos_y: -90,
                text_align: "RIGHT"
            },
            {
                label: "Sigmoid Sinus",
                pos_x: -135,
                pos_y: 100,
                text_pos_x: -210,
                text_pos_y: 180,
                text_align: "RIGHT"
            },
            {
                label: "Internal carotid artery",
                pos_x: 40,
                pos_y: -20,
                text_pos_x: 200,
                text_pos_y: -210,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Cerebellar tonsil",
                pos_x: 30,
                pos_y: 110,
                text_pos_x: 200,
                text_pos_y: 180,
                text_align: "LEFT"
            },
            {
                label: "Middle cerebellar peduncle",
                pos_x: 55,
                pos_y: 80,
                text_pos_x: 200,
                text_pos_y: 120,
                text_align: "LEFT"
            },
            {
                label: "Pons",
                pos_x: 10,
                pos_y: 40,
                text_pos_x: -210,
                text_pos_y: 90,
                text_align: "RIGHT"
            }
        ]
    },
    6: {
        cistern:[{
            label: "Prepontine Cistern",
            pos_x: 16,
            pos_y: 10,
          text_pos_x: -190,
            text_pos_y: -150,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [{
            label: "Inferior rectus muscle",
            pos_x: 68,
            pos_y: -130,
            text_pos_x: 200,
            text_pos_y: -240,
            text_align: "LEFT"
        }],
        ventricles: [{
            label: "Fourth Ventricle",
            pos_x: 8,
            pos_y: 86,
            text_pos_x: 200,
            text_pos_y: 240,
            text_align: "LEFT"
        }],
        vesselsNerve:[
            {
                label: "Internal carotid artery",
                pos_x: 40,
                pos_y: -20,
                text_pos_x: 200,
                text_pos_y: -210,
                text_align: "LEFT"
            },
            {
            label: "Basilar artery",
            pos_x: 30,
            pos_y: 15,
            text_pos_x: 200,
            text_pos_y: -180,
            text_align: "LEFT"
            },
            {
                label: "Sigmoid Sinus",
                pos_x: -135,
                pos_y: 100,
                text_pos_x: -210,
                text_pos_y: 180,
                text_align: "RIGHT"
            },
            {
                label: "Trigeminal nerve",
                pos_x: -35,
                pos_y: 35,
                text_pos_x: -210,
                text_pos_y: 60,
                text_align: "RIGHT"
            }
        ],
        brainStructure:[]
    },
    7: {
        cistern:[{
            label: "Prepontine Cistern",
            pos_x: 16,
            pos_y: 6,
          text_pos_x: -190,
            text_pos_y: -30,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [{
            label: "Lateral rectus muscle",
            pos_x: -68,
            pos_y: -100,
          text_pos_x: -190,
            text_pos_y: -180,
            text_align: "RIGHT"
        },
        {
            label: "Anterior chamber",
            pos_x: -70,
            pos_y: -185,
          text_pos_x: -190,
            text_pos_y: -270,
            text_align: "RIGHT"
        },
        {
            label: "Medial rectus muscle",
            pos_x: -33,
            pos_y: -120,
          text_pos_x: -190,
            text_pos_y: -210,
            text_align: "RIGHT"
        },
        {
            label: "Posterior chamber",
            pos_x: 78,
            pos_y: -170,
            text_pos_x: 200,
            text_pos_y: -240,
            text_align: "LEFT"
        },
        {
            label: "Vitreous body",
            pos_x: 78,
            pos_y: -155,
            text_pos_x: 200,
            text_pos_y: -210,
            text_align: "LEFT"
        }],
        ventricles: [{
            label: "Fourth Ventricle",
            pos_x: 8,
            pos_y: 90,
            text_pos_x: 200,
            text_pos_y: 240,
            text_align: "LEFT"
        }],
        vesselsNerve:[
            {
                label: "Transverse sinus",
                pos_x: -80,
                pos_y: 190,
              text_pos_x: -190,
                text_pos_y: 240,
                text_align: "RIGHT"
            },
            {
                label: "Sigmoid Sinus",
                pos_x: -130,
                pos_y: 115,
                text_pos_x: -210,
                text_pos_y: 180,
                text_align: "RIGHT"
            },
            {
                label: "Internal carotid artery",
                pos_x: -20,
                pos_y: -10,
              text_pos_x: -190,
                text_pos_y: -60,
                text_align: "RIGHT"
            }
        ],
        brainStructure:[]
    },
    8: {
        cistern:[{
            label: "Prepontine Cistern",
            pos_x: 10,
            pos_y: 0,
          text_pos_x: -190,
            text_pos_y: -120,
            text_align: "RIGHT"
        }],
        cortex: {

        },
        muscle: [],
        orbit: [{
            label: "Lateral rectus muscle",
            pos_x: -68,
            pos_y: -100,
          text_pos_x: -190,
            text_pos_y: -180,
            text_align: "RIGHT"
        },
        {
            label: "Ciliary body",
            pos_x: -80,
            pos_y: -180,
          text_pos_x: -190,
            text_pos_y: -240,
            text_align: "RIGHT"
        },
        {
            label: "Medial rectus muscle",
            pos_x: -33,
            pos_y: -120,
          text_pos_x: -190,
            text_pos_y: -210,
            text_align: "RIGHT"
        },
        {
            label: "Anterior chamber",
            pos_x: -70,
            pos_y: -185,
          text_pos_x: -190,
            text_pos_y: -270,
            text_align: "RIGHT"
        },
        {
            label: "Lens",
            pos_x: 78,
            pos_y: -180,
            text_pos_x: 200,
            text_pos_y: -270,
            text_align: "LEFT"
        },
        {
            label: "Posterior chamber",
            pos_x: 78,
            pos_y: -170,
            text_pos_x: 200,
            text_pos_y: -240,
            text_align: "LEFT"
        },
        {
            label: "Vitreous body",
            pos_x: 78,
            pos_y: -155,
            text_pos_x: 200,
            text_pos_y: -210,
            text_align: "LEFT"
        },
        {
            label: "Lacrimal gland",
            pos_x: 112,
            pos_y: -150,
            text_pos_x: 200,
            text_pos_y: -180,
            text_align: "LEFT"
        },
        {
            label: "Optic nerve",
            pos_x: 68,
            pos_y: -120,
            text_pos_x: 200,
            text_pos_y: -150,
            text_align: "LEFT"
        }

        ],
        ventricles: [{
            label: "Fourth Ventricle",
            pos_x: 8,
            pos_y: 80,
            text_pos_x: 200,
            text_pos_y: 0,
            text_align: "LEFT"
        },
        {
            label: "Temporal horn lateral ventricle",
            pos_x: 76,
            pos_y: -4,
            text_pos_x: 200,
            text_pos_y: -30,
            text_align: "LEFT"
        }],
        vesselsNerve:[
            {
                label: "Internal carotid artery",
                pos_x: -25,
                pos_y: -42,
              text_pos_x: -190,
                text_pos_y: -150,
                text_align: "RIGHT"
            }
        ],
        brainStructure:[
            {
                label: "Pituitary gland",
                pos_x: 5,
                pos_y: -30,
                text_pos_x: 200,
                text_pos_y: -60,
                text_align: "LEFT"
            },
            {
                label: "Cerebellar nuclei",
                pos_x: 10,
                pos_y: 105,
                text_pos_x: 200,
                text_pos_y: 120,
                text_align: "LEFT"
            },
            {
                label: "Inferior temporal gyrus",
                pos_x: -120,
                pos_y: 105,
              text_pos_x: -190,
                text_pos_y: 90,
                text_align: "RIGHT"
            },
            {
                label: "Superior temporal gyrus",
                pos_x: 110,
                pos_y: -60,
                text_pos_x: 200,
                text_pos_y: -120,
                text_align: "LEFT"
            }
        ]
    },
    9: {
        cistern:[{
            label: "Interpeduncular Cistern",
            pos_x: 8,
            pos_y: 30,
          text_pos_x: -190,
            text_pos_y: 60,
            text_align: "RIGHT"
        },
        {
            label: "Chiasmatic Cistern",
            pos_x: -2,
            pos_y: -24,
          text_pos_x: -190,
            text_pos_y: -60,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [{
            label: "Lacrimal gland",
            pos_x: 112,
            pos_y: -160,
            text_pos_x: 200,
            text_pos_y: -210,
            text_align: "LEFT"
        },
        {
            label: "Posterior chamber",
            pos_x: 78,
            pos_y: -170,
            text_pos_x: 200,
            text_pos_y: -270,
            text_align: "LEFT"
        },
        {
            label: "Vitreous body",
            pos_x: 78,
            pos_y: -155,
            text_pos_x: 200,
            text_pos_y: -240,
            text_align: "LEFT"
        },
        {
            label: "Superior rectus muscle",
            pos_x: 66,
            pos_y: -110,
            text_pos_x: 200,
            text_pos_y: -180,
            text_align: "LEFT"
        },
        {
            label: "Optic Chiasm",
            pos_x: 8,
            pos_y: -14,
            text_pos_x: 200,
            text_pos_y: -120,
            text_align: "LEFT"
        },
        {
            label: "Optic nerve",
            pos_x: -18,
            pos_y: -50,
          text_pos_x: -190,
            text_pos_y: -120,
            text_align: "RIGHT"
        }],
        ventricles: [{
            label: "Aqueduct of Sylvius",
            pos_x: 8,
            pos_y: 75,
            text_pos_x: 200,
            text_pos_y: 30,
            text_align: "LEFT"
        },
        {
            label: "Temporal horn lateral ventricle",
            pos_x: 88,
            pos_y: 2,
            text_pos_x: 200,
            text_pos_y: -60,
            text_align: "LEFT"
        }],
        vesselsNerve:[
            {
                label: "Internal carotid artery ",
                pos_x: 32,
                pos_y: -44,
                text_pos_x: 200,
                text_pos_y: -150,
                text_align: "LEFT"
            },
            {
                label: "Basilar artery ",
                pos_x: 12,
                pos_y: 8,
                text_pos_x: 200,
                text_pos_y: -90,
                text_align: "LEFT"
            },
            {
                label: "Straight sinus",
                pos_x: 8,
                pos_y: 180,
                text_pos_x: 200,
                text_pos_y: 180,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Cerebral penduncle",
                pos_x: 28,
                pos_y: 35,
                text_pos_x: 200,
                text_pos_y: -30,
                text_align: "LEFT"
            },
            {
                label: "Amygdala",
                pos_x: -40,
                pos_y: -10,
              text_pos_x: -190,
                text_pos_y: -30,
                text_align: "RIGHT"
            },
            {
                label: "Hippocampus",
                pos_x: -75,
                pos_y: 15,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Inferior temporal gyrus",
                pos_x: -125,
                pos_y: 105,
              text_pos_x: -190,
                text_pos_y: 120,
                text_align: "RIGHT"
            }
        ]
    },
    10: {
        cistern:[{
            label: "Interpeduncular Cistern",
            pos_x: 8,
            pos_y: 20,
            text_pos_x: 200,
            text_pos_y: -30,
            text_align: "LEFT"
        }],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
            label: "Aqueduct of Sylvius",
            pos_x: 8,
            pos_y: 72,
            text_pos_x: 200,
            text_pos_y: 120,
            text_align: "LEFT"
        },
        {
            label: "Temporal horn lateral ventricle",
            pos_x: 98,
            pos_y: 55,
            text_pos_x: 200,
            text_pos_y: 90,
            text_align: "LEFT"
        }],
        vesselsNerve:[
            {
                label: "Middle cerebral artery",
                pos_x: 76,
                pos_y: -30,
                text_pos_x: 200,
                text_pos_y: -120,
                text_align: "LEFT"
            },
            {
                label: "Anterior cerebral artery",
                pos_x: 14,
                pos_y: -40,
                text_pos_x: 200,
                text_pos_y: -150,
                text_align: "LEFT"
            },
            {
                label: "Superior sagittal sinus",
                pos_x: -10,
                pos_y: 220,
                text_pos_x: 200,
                text_pos_y: 240,
                text_align: "LEFT"
            },
            {
                label: "Straight sinus",
                pos_x: 10,
                pos_y: 165,
                text_pos_x: 200,
                text_pos_y: 150,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Superior temporal gyrus",
                pos_x: -95,
                pos_y: -55,
              text_pos_x: -190,
                text_pos_y: -90,
                text_align: "RIGHT"
            },
            {
                label: "Straight gyrus",
                pos_x: 0,
                pos_y: -120,
              text_pos_x: -190,
                text_pos_y: -120,
                text_align: "RIGHT"
            }
        ]
    },
    11: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
            label: "Aqueduct of Sylvius",
            pos_x: 8,
            pos_y: 60,
            text_pos_x: 200,
            text_pos_y: 30,
            text_align: "LEFT"
        },
        {
            label: "Temporal horn lateral ventricle",
            pos_x: 85,
            pos_y: 95,
            text_pos_x: 200,
            text_pos_y: 60,
            text_align: "LEFT"
        }],
        vesselsNerve:[
            {
                label: "Superior sagittal sinus",
                pos_x: -5,
                pos_y: 220,
                text_pos_x: 200,
                text_pos_y: 240,
                text_align: "LEFT"
            },
            {
                label: "Straight sinus",
                pos_x: 10,
                pos_y: 145,
                text_pos_x: 200,
                text_pos_y: 120,
                text_align: "LEFT"
            },
            {
                label: "Anterior cerebral artery",
                pos_x: 5,
                pos_y: -52,
                text_pos_x: 200,
                text_pos_y: -120,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Optic tract",
                pos_x: 35,
                pos_y: -2,
                text_pos_x: 200,
                text_pos_y: 0,
                text_align: "LEFT"
            },
            {
                label: "Fornix",
                pos_x: 0,
                pos_y: -5,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Substantia nigra",
                pos_x: -15,
                pos_y: 13,
              text_pos_x: -190,
                text_pos_y: 30,
                text_align: "RIGHT"
            },
            {
                label: "Red nucleus",
                pos_x: -8,
                pos_y: 35,
              text_pos_x: -190,
                text_pos_y: 60,
                text_align: "RIGHT"
            },
            {
                label: "Putamen",
                pos_x: 70,
                pos_y: -20,
                text_pos_x: 200,
                text_pos_y: -30,
                text_align: "LEFT"
            },
            {
                label: "Superior colliculus",
                pos_x: -4,
                pos_y: 68,
              text_pos_x: -190,
                text_pos_y: 90,
                text_align: "RIGHT"
            },
            {
                label: "Straight gyrus",
                pos_x: 0,
                pos_y: -120,
              text_pos_x: -190,
                text_pos_y: -120,
                text_align: "RIGHT"
            }
        ]
    },
    12: {
        cistern:[{
            label: "Quadrigeminal Cistern",
            pos_x: 8,
            pos_y: 75,
          text_pos_x: -190,
            text_pos_y: 250,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
            label: "Third ventricle",
            pos_x: 8,
            pos_y: 3,
            text_pos_x: 60,
            text_pos_y: 0,
            text_align: "LEFT"
        }],
        vesselsNerve:[
            {
                label: "Superior sagittal sinus",
                pos_x: -5,
                pos_y: 220,
                text_pos_x: 200,
                text_pos_y: 240,
                text_align: "LEFT"
            },
            {
                label: "Straight sinus",
                pos_x: 10,
                pos_y: 125,
                text_pos_x: 200,
                text_pos_y: 120,
                text_align: "LEFT"
            },
            {
                label: "Anterior cerebral artery",
                pos_x: 6,
                pos_y: -50,
                text_pos_x: 200,
                text_pos_y: -120,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Superior frontal gyrus",
                pos_x: 30,
                pos_y: -155,
                text_pos_x: 200,
                text_pos_y: -180,
                text_align: "LEFT"
            },
            {
                label: "Insula",
                pos_x: -85,
                pos_y: -15,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Superior temporal gyrus",
                pos_x: -105,
                pos_y: -35,
              text_pos_x: -190,
                text_pos_y: -60,
                text_align: "RIGHT"
            },
            {
                label: "Middle temporal gyrus",
                pos_x: -125,
                pos_y: 95,
              text_pos_x: -190,
                text_pos_y: 90,
                text_align: "RIGHT"
            },
            {
                label: "Putamen",
                pos_x: 70,
                pos_y: -20,
                text_pos_x: 200,
                text_pos_y: -30,
                text_align: "LEFT"
            },
            {
                label: "Head of caudate nucleus",
                pos_x: 30,
                pos_y: -40,
                text_pos_x: 200,
                text_pos_y: -60,
                text_align: "LEFT"
            }
        ]
    },
    13: {
        cistern:[{
            label: "Quadrigeminal Cistern",
            pos_x: 8,
            pos_y: 65,
          text_pos_x: -190,
            text_pos_y: 180,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
                label: "Anterior horn lateral ventricle",
                pos_x: 46,
                pos_y: -72,
                text_pos_x: 80,
                text_pos_y: -90,
                text_align: "LEFT"
            },
            {
                label: "Posterior horn lateral ventricle",
                pos_x: 73,
                pos_y: 95,
                text_pos_x: 200,
                text_pos_y: 180,
                text_align: "LEFT"
            },
            {
                label: "Third ventricle",
                pos_x: 8,
                pos_y: -3,
                text_pos_x: 60,
                text_pos_y: -30,
                text_align: "LEFT"
            }
        ],
        vesselsNerve:[
            {
                label: "Superior sagittal sinus",
                pos_x: 0,
                pos_y: 215,
                text_pos_x: 200,
                text_pos_y: 240,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Head of caudate nucleus",
                pos_x: 35,
                pos_y: -40,
                text_pos_x: 200,
                text_pos_y: -60,
                text_align: "LEFT"
            },
            {
                label: "Putamen",
                pos_x: 70,
                pos_y: -20,
                text_pos_x: 200,
                text_pos_y: 0,
                text_align: "LEFT"
            },
            {
                label: "Globus pallidus",
                pos_x: -48,
                pos_y: 30,
              text_pos_x: -190,
                text_pos_y: 120,
                text_align: "RIGHT"
            },
            {
                label: "Anterior limb of internal capsule",
                pos_x: -28,
                pos_y: -45,
              text_pos_x: -190,
                text_pos_y: -150,
                text_align: "RIGHT"
            },
            {
                label: "Posterior limb of internal capsule",
                pos_x: -40,
                pos_y: 0,
              text_pos_x: -190,
                text_pos_y: 60,
                text_align: "RIGHT"
            },
            {
                label: "External capsule",
                pos_x: -68,
                pos_y: -30,
              text_pos_x: -190,
                text_pos_y: -90,
                text_align: "RIGHT"
            },
            {
                label: "Thalamus",
                pos_x: 35,
                pos_y: 55,
                text_pos_x: 200,
                text_pos_y: 60,
                text_align: "LEFT"
            },
            {
                label: "Interthalamic adhesion",
                pos_x: 8,
                pos_y: 12,
                text_pos_x: 200,
                text_pos_y: 30,
                text_align: "LEFT"
            },
            {
                label: "Insula",
                pos_x: -80,
                pos_y: -15,
              text_pos_x: -190,
                text_pos_y: -60,
                text_align: "RIGHT"
            }
        ]
    },
    14: {
        cistern:[{
            label: "Quadrigeminal Cistern",
            pos_x: 8,
            pos_y: 60,
          text_pos_x: -190,
            text_pos_y: 180,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
                label: "Anterior horn lateral ventricle",
                pos_x: 46,
                pos_y: -72,
                text_pos_x: 80,
                text_pos_y: -90,
                text_align: "LEFT"
            },
            {
                label: "Posterior horn lateral ventricle",
                pos_x: 69,
                pos_y: 95,
                text_pos_x: 200,
                text_pos_y: 180,
                text_align: "LEFT"
            },
            {
                label: "Choroid plexus",
                pos_x: -56,
                pos_y: 86,
              text_pos_x: -190,
                text_pos_y: 150,
                text_align: "RIGHT"
            }
        ],
        vesselsNerve:[
            {
                label: "Superior sagittal sinus",
                pos_x: 0,
                pos_y: 215,
                text_pos_x: 200,
                text_pos_y: 240,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Head of caudate nucleus",
                pos_x: 35,
                pos_y: -40,
                text_pos_x: 200,
                text_pos_y: -60,
                text_align: "LEFT"
            },
            {
                label: "Putamen",
                pos_x: 70,
                pos_y: 0,
                text_pos_x: 200,
                text_pos_y: -30,
                text_align: "LEFT"
            },
            {
                label: "Globus pallidus",
                pos_x: -48,
                pos_y: 30,
              text_pos_x: -190,
                text_pos_y: 120,
                text_align: "RIGHT"
            },
            {
                label: "Anterior limb of internal capsule",
                pos_x: -35,
                pos_y: -45,
              text_pos_x: -190,
                text_pos_y: -150,
                text_align: "RIGHT"
            },
            {
                label: "Posterior limb of internal capsule",
                pos_x: -40,
                pos_y: 5,
              text_pos_x: -190,
                text_pos_y: 60,
                text_align: "RIGHT"
            },
            {
                label: "External capsule",
                pos_x: -70,
                pos_y: 0,
              text_pos_x: -190,
                text_pos_y: -30,
                text_align: "RIGHT"
            },
            {
                label: "Thalamus",
                pos_x: 35,
                pos_y: 45,
                text_pos_x: 200,
                text_pos_y: 30,
                text_align: "LEFT"
            },
            {
                label: "Precuneus",
                pos_x: -3,
                pos_y: 115,
              text_pos_x: -190,
                text_pos_y: 210,
                text_align: "RIGHT"
            },
            {
                label: "Cuneus",
                pos_x: -3,
                pos_y: 155,
              text_pos_x: -190,
                text_pos_y: 240,
                text_align: "RIGHT"
            },
            {
                label: "Genu of corpus callosum",
                pos_x: 10,
                pos_y: -60,
                text_pos_x: 80,
                text_pos_y: -120,
                text_align: "LEFT"
            },
            {
                label: "Splenium of corpus callosum",
                pos_x: 10,
                pos_y: 80,
                text_pos_x: 200,
                text_pos_y: 210,
                text_align: "LEFT"
            },
            {
                label: "Insula",
                pos_x: -80,
                pos_y: -15,
              text_pos_x: -190,
                text_pos_y: -60,
                text_align: "RIGHT"
            }
        ]
    },
    15: {
        cistern:[{
            label: "Quadrigeminal Cistern",
            pos_x: 8,
            pos_y: 55,
          text_pos_x: -190,
            text_pos_y: 180,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
                label: "Anterior horn lateral ventricle",
                pos_x: 46,
                pos_y: -66,
                text_pos_x: 80,
                text_pos_y: -90,
                text_align: "LEFT"
            },
            {
                label: "Posterior horn lateral ventricle",
                pos_x: 62,
                pos_y: 90,
                text_pos_x: 200,
                text_pos_y: 180,
                text_align: "LEFT"
            },
            {
                label: "Choroid plexus",
                pos_x: 40,
                pos_y: 68,
                text_pos_x: 200,
                text_pos_y: 140,
                text_align: "LEFT"
            }
        ],
        vesselsNerve:[
            {
                label: "Superior sagittal sinus",
                pos_x: 0,
                pos_y: 210,
                text_pos_x: 200,
                text_pos_y: 240,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Head of caudate nucleus",
                pos_x: 40,
                pos_y: -30,
                text_pos_x: 200,
                text_pos_y: -60,
                text_align: "LEFT"
            },
            {
                label: "Putamen",
                pos_x: 70,
                pos_y: 0,
                text_pos_x: 200,
                text_pos_y: -30,
                text_align: "LEFT"
            },
            {
                label: "Globus pallidus",
                pos_x: -45,
                pos_y: 35,
              text_pos_x: -190,
                text_pos_y: 150,
                text_align: "RIGHT"
            },
            {
                label: "Anterior limb of internal capsule",
                pos_x: -40,
                pos_y: -35,
              text_pos_x: -190,
                text_pos_y: -150,
                text_align: "RIGHT"
            },
            {
                label: "Posterior limb of internal capsule",
                pos_x: -40,
                pos_y: 15,
              text_pos_x: -190,
                text_pos_y: 120,
                text_align: "RIGHT"
            },
            {
                label: "External capsule",
                pos_x: -68,
                pos_y: 15,
              text_pos_x: -190,
                text_pos_y: 90,
                text_align: "RIGHT"
            },
            {
                label: "Thalamus",
                pos_x: 45,
                pos_y: 45,
                text_pos_x: 200,
                text_pos_y: 30,
                text_align: "LEFT"
            },
            {
                label: "Precuneus",
                pos_x: -3,
                pos_y: 115,
              text_pos_x: -190,
                text_pos_y: 210,
                text_align: "RIGHT"
            },
            {
                label: "Cuneus",
                pos_x: -3,
                pos_y: 155,
              text_pos_x: -190,
                text_pos_y: 240,
                text_align: "RIGHT"
            },
            {
                label: "Genu of corpus callosum",
                pos_x: 10,
                pos_y: -60,
                text_pos_x: 80,
                text_pos_y: -120,
                text_align: "LEFT"
            },
            {
                label: "Splenium of corpus callosum",
                pos_x: 10,
                pos_y: 70,
                text_pos_x: 200,
                text_pos_y: 210,
                text_align: "LEFT"
            },
            {
                label: "Insula",
                pos_x: -73,
                pos_y: -15,
              text_pos_x: -190,
                text_pos_y: -60,
                text_align: "RIGHT"
            }
        ]
    },
    16: {
        cistern:[{
            label: "Quadrigeminal Cistern",
            pos_x: 5,
            pos_y: 40,
          text_pos_x: -190,
            text_pos_y: 250,
            text_align: "RIGHT"
        }],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
                label: "Anterior horn lateral ventricle",
                pos_x: 42,
                pos_y: -50,
                text_pos_x: 80,
                text_pos_y: -60,
                text_align: "LEFT"
            },
            {
                label: "Posterior horn lateral ventricle",
                pos_x: 58,
                pos_y: 82,
                text_pos_x: 200,
                text_pos_y: 180,
                text_align: "LEFT"
            },
            {
                label: "Choroid plexus",
                pos_x: 20,
                pos_y: 20,
                text_pos_x: 200,
                text_pos_y: 140,
                text_align: "LEFT"
            }
        ],
        vesselsNerve:[
            {
                label: "Superior sagittal sinus",
                pos_x: 4,
                pos_y: 210,
                text_pos_x: 200,
                text_pos_y: 240,
                text_align: "LEFT"
            }
        ],
        brainStructure:[
            {
                label: "Head of caudate nucleus",
                pos_x: -28,
                pos_y: -20,
              text_pos_x: -190,
                text_pos_y: -150,
                text_align: "RIGHT"
            },
            {
                label: "Corona radiata",
                pos_x: -55,
                pos_y: -0,
              text_pos_x: -190,
                text_pos_y: -60,
                text_align: "RIGHT"
            },
            {
                label: "Septum pellucidum",
                pos_x: 7,
                pos_y: -10,
                text_pos_x: 200,
                text_pos_y: 60,
                text_align: "LEFT"
            }
            
        ]
    },
    17: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
            label: "Lateral ventricle",
            pos_x: -18,
            pos_y: 0,
            text_pos_x: -120,
            text_pos_y: -200,
            text_align: "RIGHT"
        }],
        vesselsNerve:[],
        brainStructure:[]
    },
    18: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [{
            label: "Lateral ventricle",
            pos_x: -28,
            pos_y: 0,
            text_pos_x: -120,
            text_pos_y: -200,
            text_align: "RIGHT"
        }],
        vesselsNerve:[],
        brainStructure:[]
    },
    19: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[],
        brainStructure:[
            {
                label: "Superior frontal gyrus",
                pos_x: -30,
                pos_y: -95,
              text_pos_x: -190,
                text_pos_y: -120,
                text_align: "RIGHT"
            },
            {
                label: "Middle frontal gyrus",
                pos_x: -85,
                pos_y: -48,
              text_pos_x: -190,
                text_pos_y: -90,
                text_align: "RIGHT"
            },
            {
                label: "Precentral gyrus",
                pos_x: -110,
                pos_y: 0,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Postcentral gyrus",
                pos_x: -110,
                pos_y: 40,
              text_pos_x: -190,
                text_pos_y: 30,
                text_align: "RIGHT"
            },
            {
                label: "Supramarginal gyrus",
                pos_x: -125,
                pos_y: 60,
              text_pos_x: -190,
                text_pos_y: 60,
                text_align: "RIGHT"
            },
            {
                label: "Superior temporal gyrus",
                pos_x: -125,
                pos_y: 80,
              text_pos_x: -190,
                text_pos_y: 90,
                text_align: "RIGHT"
            }
        ]
    },
    20: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[],
        brainStructure:[
            {
                label: "Superior frontal gyrus",
                pos_x: -30,
                pos_y: -95,
              text_pos_x: -190,
                text_pos_y: -120,
                text_align: "RIGHT"
            },
            {
                label: "Middle frontal gyrus",
                pos_x: -85,
                pos_y: -45,
              text_pos_x: -190,
                text_pos_y: -90,
                text_align: "RIGHT"
            },
            {
                label: "Precentral gyrus",
                pos_x: -110,
                pos_y: 0,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Postcentral gyrus",
                pos_x: -115,
                pos_y: 40,
              text_pos_x: -190,
                text_pos_y: 30,
                text_align: "RIGHT"
            },
            {
                label: "Supramarginal gyrus",
                pos_x: -125,
                pos_y: 60,
              text_pos_x: -190,
                text_pos_y: 60,
                text_align: "RIGHT"
            },
            {
                label: "Superior temporal gyrus",
                pos_x: -125,
                pos_y: 80,
              text_pos_x: -190,
                text_pos_y: 90,
                text_align: "RIGHT"
            }
        ]
    },
    21: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[],
        brainStructure:[
            {
                label: "Middle frontal gyrus",
                pos_x: -85,
                pos_y: -45,
              text_pos_x: -190,
                text_pos_y: -90,
                text_align: "RIGHT"
            },
            {
                label: "Precentral gyrus",
                pos_x: -100,
                pos_y: 20,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Postcentral gyrus",
                pos_x: -85,
                pos_y: 80,
              text_pos_x: -190,
                text_pos_y: 120,
                text_align: "RIGHT"
            }
        ]
    },
    22: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[],
        brainStructure:[
            {
                label: "Medial frontal gyrus",
                pos_x: -10,
                pos_y: -30,
              text_pos_x: -190,
                text_pos_y: -150,
                text_align: "RIGHT"
            },
            {
                label: "Middle frontal gyrus",
                pos_x: -85,
                pos_y: -45,
              text_pos_x: -190,
                text_pos_y: -90,
                text_align: "RIGHT"
            },
            {
                label: "Precentral gyrus",
                pos_x: -100,
                pos_y: 20,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Postcentral gyrus",
                pos_x: -85,
                pos_y: 85,
              text_pos_x: -190,
                text_pos_y: 120,
                text_align: "RIGHT"
            },
            {
                label: "Precuneus",
                pos_x: -5,
                pos_y: 130,
              text_pos_x: -190,
                text_pos_y: 150,
                text_align: "RIGHT"
            }
        ]
    },
    23: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[],
        brainStructure:[
            {
                label: "Medial frontal gyrus",
                pos_x: -20,
                pos_y: -10,
              text_pos_x: -190,
                text_pos_y: -60,
                text_align: "RIGHT"
            },
            {
                label: "Middle frontal gyrus",
                pos_x: -65,
                pos_y: -50,
              text_pos_x: -190,
                text_pos_y: -90,
                text_align: "RIGHT"
            },
            {
                label: "Precentral gyrus",
                pos_x: -90,
                pos_y: 20,
              text_pos_x: -190,
                text_pos_y: 0,
                text_align: "RIGHT"
            },
            {
                label: "Postcentral gyrus",
                pos_x: -80,
                pos_y: 90,
              text_pos_x: -190,
                text_pos_y: 120,
                text_align: "RIGHT"
            },
            {
                label: "Precuneus",
                pos_x: -5,
                pos_y: 145,
              text_pos_x: -190,
                text_pos_y: 150,
                text_align: "RIGHT"
            }
        ]
    },
    24: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[],
        brainStructure:[
        {
            label: "Precuneus",
            pos_x: -18,
            pos_y: 140,
          text_pos_x: -190,
            text_pos_y: 150,
            text_align: "RIGHT"
        },
        {
            label: "Medial frontal gyrus",
            pos_x: -2,
            pos_y: -10,
          text_pos_x: -190,
            text_pos_y: -60,
            text_align: "RIGHT"
        },
        {
            label: "Precentral gyrus",
            pos_x: -60,
            pos_y: 70,
          text_pos_x: -190,
            text_pos_y: 60,
            text_align: "RIGHT"
        }
    ]
    },
    25: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[],
        brainStructure:[]
    },
    26: {
        cistern: [],
        cortex: [],
        muscle: [],
        orbit: [],
        ventricles: [],
        vesselsNerve:[],
        brainStructure:[]
    }
};

for (let i = 0; i < 27; i++){
    for (let j = 0; j < structure_list.length; j++){
        // Push to list if not empty
        if (slice_data[i][structure_list[j]].length != 0){
            for (let k = 0; k < slice_data[i][structure_list[j]].length; k++ ){
                slice_data[i][structure_list[j]][k]["image_num"] = i +1;
                whole_test_list.push(slice_data[i][structure_list[j]][k]);
            }
        }
    }
}

