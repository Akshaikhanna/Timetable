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
                    subject:'PR1-4A'
                },
                {
                    time:'9.50 AM',
                    subject:'PR1-4A'
                },
                {
                    time:'11.00 AM',
                    subject:''
                },
                {
                    time:'1.40 PM',
                    subject:''
                },
                {
                    time:'2.30 PM',
                    subject:''
                },
                {
                    time:'3.35 PM',
                    subject:''
                },
                {
                    time:'4.25 PM',
                    subject:''
                }
            ]
        },
        {
            day:'Wednesday',
            classes:
            [
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                }
            ]
        },
        {
            day:'Thursday',
            classes:[
                { 
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                }
            ]
        },
        {
            day:'Friday',
            classes:[
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                },
                {
                    time:'',
                    subject:''
                }
            ]
        }
];

app.get('/timetable',(req, res)=>{
    res.send(Timetable);
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});