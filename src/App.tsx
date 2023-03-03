import { Route, Routes } from 'react-router-dom';
import MainOutlet from 'components/common/Outlet/main.outlet';
import PetitionDetail from 'components/layout/home/PetitionDetail';
import CreatePetition from 'components/layout/home/WritePetition';
import MyPetition from 'components/layout/home/MyPetition';
import Main from 'components/layout/home/Main';
import Login from 'components/layout/auth/Login';
import Join from 'components/layout/auth/Join';
import UpdatePassword from 'components/layout/home/UpdatePassword';

const App = () => {
  return (
    <Routes>
      <Route element={<MainOutlet />}>
        <Route path="/" element={<Main />} />
        <Route path="/petition/:id" element={<PetitionDetail />} />
        <Route path="/petition/my" element={<MyPetition />} />
      </Route>
      <Route path="/update/password" element={<UpdatePassword />} />
      <Route path="/petition/write" element={<CreatePetition />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
};

export default App;
