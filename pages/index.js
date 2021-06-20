import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SoloTable from '../components/solotable';
import PlayerTable from '../components/playerTable';
import Create from '../components/game/create'

export default function Home() {
  
  return (

    <div style={{"backgroundColor": "#FFA3B3"}} className="flex  justify-center">

      <div className="flex overflow-hidden justify-center mt-16">
      <Tabs >
        <h1 className="text-black font-semibold text-3xl mb-8">🍻 Beerpong gedöns und so</h1>
          <TabList className="flex mb-4 w-full">
            <Tab className="text-white font-normal text-2xl mr-4 cursor-pointer">Solo</Tab>
            <Tab className="text-white font-normal text-2xl mr-4 cursor-pointer">Team</Tab>
            <Tab className="text-white font-normal text-2xl mr-4 cursor-pointer">Players</Tab>
            <Tab className="text-white font-normal text-2xl mr-4 cursor-pointer">Create Game</Tab>
            <Tab className="text-white font-normal text-2xl mr-4 cursor-pointer">Regeln</Tab>


          </TabList>
          <TabPanel className="">
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
          <TabPanel className="flex justify-center">
            <h1>Regeln!</h1>
          </TabPanel>
        </Tabs>
      </div>
    </div>

  )
}
