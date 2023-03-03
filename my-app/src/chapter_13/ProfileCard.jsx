import Card from "./Card";

function ProfileCard(props){
    return(
        <Card title="프로필 목록" backgroundColor="pink">
            <Card title="성희" job="작은개발자" backgroundColor="#aaff3f">
                <p>다시 시작하는 작은 개발자입니다 <br/> 잘부탁드립니다. </p>
                <p>리액트 공부 열심히할게요</p>
            </Card>
            <Card title="해원" job="큰개발자" backgroundColor="#ffff3f">
                <p>리액트 잘하는 큰개발자임다 <br/> 잘부탁드립니다. </p>
                <p>리액트 공부 열심히했습니다</p>
            </Card>
        </Card>
    );
}

export default ProfileCard;