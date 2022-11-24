import styled from "styled-components";
import ProgressBar from "../../utils/progressBar";

const UserSummary = (props) => {
  return (
    <UserSummaryBox blur={props.blur}>
      <RowGrid>
        <p>대표 칭호</p>
        <RepTitle mainBadgeImg={props.mainBadgeImg}></RepTitle>
      </RowGrid>
      <RowGrid>
        <RepTitleName>{props.mainBadgeName}</RepTitleName>
        <ProgressGrid>
          <ProgressBar
            bgcolor={props.bgcolor}
            completed={props.completed}
            goal={props.goal}
          />
        </ProgressGrid>
      </RowGrid>
      <RecentTitle recentTitle={props.RecentTitle} />
      <RecentTitle recentTitle={props.RecentTitle_2} />
      <RecentTitle recentTitle={props.RecentTitle_3} />
    </UserSummaryBox>
  );
};
export default UserSummary;

const UserSummaryBox = styled.div`
  width: 100rem;
  height: 12.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  filter: blur(${(props) => props.blur}rem);
`;

const RowGrid = styled.div`
  font-size: 1rem;
  display: grid;
  grid-template-rows: 1fr 4fr;
  margin: 1rem;
`;

const ProgressGrid = styled.div`
  display: grid;
  place-items: center;
`;

const RepTitle = styled.div`
  background-image: url(${(props) => props.mainBadgeImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 8rem;
  height: 8rem;
  border-radius: 5rem;
  background-color: #ababab;
`;

const RepTitleName = styled.div`
  font-size: 32px;
`;

const RecentTitle = styled.div`
  background-image: url(${(props) => props.recentTitle});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 5rem;
  background-color: #ababab;
  display: grid;
  margin: 0 auto;
`;