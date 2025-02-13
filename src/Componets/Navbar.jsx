import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Header className="bg-white shadow-md">
        <Menu mode="horizontal" defaultSelectedKeys={['home']} className="flex justify-center">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="class">
            <Link to="/class">Class</Link>
          </Menu.Item>
          <Menu.Item key="subject">
            <Link to="/subject">Subject</Link>
          </Menu.Item>
          <Menu.Item key="data">
            <Link to="/data">Data</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
