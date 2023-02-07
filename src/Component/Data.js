const express = require("express");
const { default: Timetable } = require("./Timetable");
const app = express();
const port = 3306;

const timetable = [
    {
        day: 'Monday',
        classes: [
            {
                time:'9.00 AM',
                subject:'PR1-4A'
            },
            {
                time:'9.50 AM',
                subject:'PR1-4A'
            },
            {
                time:'11.00AM',
                subject:'PR1-4A'
            },
            {
                time:'11.50 AM',
                subject:'PR1-4A'
            },
            {
                time:'1.40 PM',
                subject:'1CD-4A'
            },
            {
                time:'2.30 PM',
                subject:'SEM-4A'
            },
            {
                time:'3.35 PM',
                subject:'SEM-4A'
            },
            {
                time:'4.25 PM',
                subject:'SEM-4A'
            }
        ]
    },
        {
            day:'Tuesday',
            classes:[
                {
                    time:'9.00 AM',
                    subject:'1CD-4A'
                },
                {
                    time:'9.50 AM',
                    subject:'FS1-4A'
                },
                {
                    time:'11.00 AM',
                    subject:'SEM-4A'
                },
                {
                    time:'11.50 AM',
                    subject:'FS1-4A'
                },
                {
                    time:'1.40 PM',
                    subject:'PR2-4A'
                },
                {
                    time:'2.30 PM',
                    subject:'PR2-4A'
                },
                {
                    time:'3.35 PM',
                    subject:'PR2-4A'
                },
                {
                    time:'4.25 PM',
                    subject:'PR2-4A'
                }
            ]
        },
        {
            day:'Wednesday',
            classes:
            [
                {
                    time:'9.00 AM',
                    subject:'SEM-4A'   
                },
                {
                    time:'9.50 AM',
                    subject:'FS1-4A'
                },
                {
                    time:'11.00 AM',
                    subject:'1CD-4A'
                },
                {
                    time:'11.50 AM',
                    subject:'FS1-4A'
                },
                {
                    time:'1.40 PM',
                    subject:'PR3-4A'
                },
                {
                    time:'2.30 PM',
                    subject:'PR3-4A'
                },
                {
                    time:'3.35 PM',
                    subject:'PR3-4A'
                },
                {
                    time:'4.25 PM',
                    subject:'PR3-4A'
                }
            ]
        },
        {
            day:'Thursday',
            classes:[
                { 
                    time:'9.00 AM',
                    subject:'SEM-4A'
                },
                {
                    time:'9.50 AM',
                    subject:'TWM-4A'
                },
                {
                    time:'11.00 AM',
                    subject:'SEM-4A'
                },
                {
                    time:'11.50 AM',
                    subject:'1CD-4A'
                },
                {
                    time:'1.40 PM',
                    subject:'LIB-4A'
                },
                {
                    time:'2.30 PM',
                    subject:'PR4-4A'
                },
                {
                    time:'3.35 PM',
                    subject:'PR4-4A'
                },
                {
                    time:'4.25 PM',
                    subject:'PR4-4A'
                }
            ]
        },
        {
            day:'Friday',
            classes:[
                {
                    time:'9.00 AM',
                    subject:'SEM-4A'
                },
                {
                    time:'9.50 AM',
                    subject:'SEM-4A'
                },
                {
                    time:'11.00 AM',
                    subject:'AH-4A'
                },
                {
                    time:'11.50 AM',
                    subject:'AH-4A'
                },
                {
                    time:'1.40 PM',
                    subject:'SEM-4A'
                },
                {
                    time:'2.30 PM',
                    subject:'SEM-4A'
                },
                {
                    time:'3.35 PM',
                    subject:'SEM-4A'
                },
                {
                    time:'4.25 PM',
                    subject:'SEM-4A'
                }
            ]
        }
];

app.get('/timetable/employee',(req, res)=>{
    res.send(Timetable);
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});