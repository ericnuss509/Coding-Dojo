// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';


// var gapi = window.gapvar 
// var CLIENT_ID="526693309427-2fk49is8o0elgjih63n1jdl1a40vtfgl.apps.googleusercontent.com"
// var API_KEY="AIzaSyBtRyCzUNQXTrJsNzDg4M__NtBa5rwOLz8"
// var DISCOVERY_DOC="[https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest]"
// var SCOPES="https://www.googleapis.com/auth/calendar.readonly"

// const handleClick = () => {
//     gapi.load('client:auth2', () => {
//     console.log('loaded client')

//     gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES,
//     })
//     gapi.client.load('calendar', 'v3', () => console.log('bam!'))

//     gapi.auth2.getAuthInstance().signIn()
//     .then(() => {
      
//       var event = {
//         'summary': 'Awesome Event!',
//         'location': '800 Howard St., San Francisco, CA 94103',
//         'description': 'Really great refreshments',
//         'start': {
//           'dateTime': '2020-06-28T09:00:00-07:00',
//           'timeZone': 'America/Los_Angeles'
//         },
//         'end': {
//           'dateTime': '2020-06-28T17:00:00-07:00',
//           'timeZone': 'America/Los_Angeles'
//         },
//         'recurrence': [
//           'RRULE:FREQ=DAILY;COUNT=2'
//         ],
//         'attendees': [
//           {'email': 'lpage@example.com'},
//           {'email': 'sbrin@example.com'}
//         ],
//         'reminders': {
//           'useDefault': false,
//           'overrides': [
//             {'method': 'email', 'minutes': 24 * 60},
//             {'method': 'popup', 'minutes': 10}
//           ]
//         }
//       }

//       var request = gapi.client.calendar.events.insert({
//         'calendarId': 'primary',
//         'resource': event,
//       })

//       request.execute(event => {
//         console.log(event)
//         window.open(event.htmlLink)
//       })
      








// const Calendar = (props) =>{
//     return(
        
//             <div>
//                 <h1>The Calendar Page is Coming Soon!</h1>
//                 <h2>To book the Seattle Greenhouse go to our contact page and send us an email. We will get back to you shortly to help you with your special event.</h2>
                
//                 <Button 
//                         a href="/"
//                         size = "small"
//                         variant ="contained" 
//                         color = "secondary">
//                         Return to Home
//                     </Button>
//             </div>
//     )
// }

// export default Calendar


import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

    var gapi = window.gapi
    /* 
        Update with your own Client Id and Api key 
    */
    var CLIENT_ID = "526693309427-2fk49is8o0elgjih63n1jdl1a40vtfgl.apps.googleusercontent.com"
    var API_KEY = "AIzaSyBtRyCzUNQXTrJsNzDg4M__NtBa5rwOLz8"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"




//   return (
//     <div className="App">
//       <header className="App-header">
    //   CODE BLOCK IS IN THE OTHER RETURN BELOW 112 - 114
       
//       </header>
//     </div>
//   );






const Calendar = (props) =>{

    const handleClick = () => {
        gapi.load('client:auth2', () => {
        console.log('loaded client')

        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        })

        gapi.client.load('calendar', 'v3', () => console.log('bam!'))
        gapi.auth2.getAuthInstance().signIn()
        .then(() => {
            
        var event = {
            'summary': 'Awesome Event!',
            'location': '1121 S Dawson St., Seattle, WA 98108',
            'description': 'Really great refreshments',
            'start': {
                'dateTime': '2022-06-28T09:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
            },
                'end': {
                'dateTime': '2022-06-28T17:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
            },
            'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=2'
            ],
            'attendees': [
                {'email': 'erictylernuss@gmail.com'},
                {'email': 'ericpennyroyalnies@gmail.com'}
            ],
            'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
            ]
            }
        }

        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
        })

        request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
        })
        

        /*
            Uncomment the following block to get events
        */
        /*
        // get events
        gapi.client.calendar.events.list({
            `'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': '`startTime'
        }).then(response => {
            const events = response.result.items
            console.log('EVENTS: ', events)
        })
        */
    

        })
    })
}
    return(
        
            <div>
                <h1>The Calendar Page is Coming Soon!</h1>
                <h2>To book the Seattle Greenhouse go to our contact page and send us an email. We will get back to you shortly to help you with your special event.</h2>
                <p>Click to add event to Google Calendar</p>
                <p style={{fontSize: 18}}>Uncomment the get events code to get events</p>
                <p style={{fontSize: 18}}>Don't forget to add your Client Id and Api key</p>
                <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>

                <Button 
                        a href="/"
                        size = "small"
                        variant ="contained" 
                        color = "secondary">
                        Return to Home
                    </Button>

                    <input type="date" />
                    <select name="" id=""> 
                    <option value="">
                        12:30
                    </option>
                    <option value="">
                        Monday
                        </option>
                    </select>
            </div>
    )
}




export default Calendar