import React from 'react';
import Notification from './Notification';

const reservedNotification = [
    {
        id : 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다!",
    },
    {
        id : 2,
        message: "점심식사 시간입니다! 오늘 메뉴는 초밥입니다.",
    },
    {
        id : 3,
        message: "곧 미팅이 시작됩니다.",
    },
    {
        id : 4,
        message: "곧 두번째 미팅이 시작됩니다.",
    },
    {
        id : 5,
        message: "퇴근할 시간입니다!!!",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notifications : [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reservedNotification.length){
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({
                    notifications : notifications,
                });
            }else{
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                    key={notification.id}
                    id={notification.id}
                    message={notification.message} />
                })}
            </div>
        )
    }
}

export default NotificationList;