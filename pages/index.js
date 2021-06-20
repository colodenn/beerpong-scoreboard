import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SoloTable from '../components/solotable';
import PlayerTable from '../components/playerTable';
import Create from '../components/game/create'

export default function Home() {
  
  return (
    <div className="bg-gray-700 w-screen h-screen flex justify-center">

      <div className="container flex justify-center">
      <Tabs >
          <TabList className="flex justify-center">
            <Tab className="text-white font-bold text-2xl mr-4 cursor-pointer">Solo</Tab>
            <Tab className="text-white font-bold text-2xl mr-4 cursor-pointer">Team</Tab>
            <Tab className="text-white font-bold text-2xl mr-4 cursor-pointer">Players</Tab>
            <Tab className="text-white font-bold text-2xl mr-4 cursor-pointer">Create Game</Tab>

          </TabList>
          <TabPanel>
              <SoloTable/>
          </TabPanel>
          <TabPanel>
            <h1>TEST"2</h1>
          </TabPanel>
          <TabPanel className="flex justify-center">
            <PlayerTable/>
          </TabPanel>
          <TabPanel className="flex justify-center">
            <Create/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
