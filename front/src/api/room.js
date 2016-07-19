export function fetchRooms() {;
    // return fetch("http://localhost:3000/FetchRooms", {
    //     method: 'POST'
    // }).then(res => res.json()).then(payload => {
    //     return {payload};
    // }).catch(error => {
    //     return {error};
    // });

    return {
        payload: {
            rooms: [
                {
                    roomName: 'test1',
                    roomId: '1',
                    quizType: 'mos'
                }, {
                    roomName: 'test2',
                    roomId: '2',
                    quizType: 'mos2'
                }
            ]
        }
    };
}
