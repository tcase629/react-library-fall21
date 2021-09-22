import { HomeHeader, HomePara } from '../styles/homeStyles';

const Home = () => (
  <>
    <h1>Home Page</h1>
    <h1 style={{ color: "green", fontSize: "13px" }}>Home Page</h1>
    <h1 style={styles.mainHead}>Home Page</h1>
    <p style={styles.mainP}>Hello World</p>
    <HomePara>Hello World</HomePara>
    <HomeHeader>Hello World!</HomeHeader>
    <HomeHeader large>Hello World!</HomeHeader>
  </>
)

export const styles = {
  mainHead: {
    color: "blue",
    fontSize: '24px',
    background: "yellow",
  },
  mainP: {
    fontSize: '40px',
    background: "red",
  },
} 

export default Home;