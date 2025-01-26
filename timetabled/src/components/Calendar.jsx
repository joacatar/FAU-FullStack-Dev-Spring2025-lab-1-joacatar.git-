import React from 'react';
import Event from './Event.jsx';

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event event='Fancy Dinner' color="green"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Sightseeing' color="blue"/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <Event event='Museum Visit' color="red"/>
                    <td></td>
                    <Event event='Shopping' color="yellow"/>
                    <Event event='Lunch' color="green"/>
                    <Event event='Concert' color="blue"/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <td></td>
                    <Event event='Breakfast' color="green"/>
                    <Event event='Meeting' color="yellow"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Lunch' color="blue"/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Meeting' color="yellow"/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Breakfast' color="green"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event = 'Soccer' color="green"/>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Meeting' color="yellow"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Lunch' color="blue"/>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Meeting' color="yellow"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Sightseeing' color="blue"/>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
        )
}

export default Calendar;