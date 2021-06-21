import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SoloTable from '../components/solotable';
import PlayerTable from '../components/playerTable';
import Create from '../components/game/create'
import Piechart from '../components/piechart';
import Rules from '../components/rules/rules';
export default function Home() {
  
  return (
<>
    <div style={{"backgroundColor": "#FFA3B3"}}>

      <div className="sm:p-10 p-4">
      <Tabs >
        <h1 className="text-black font-semibold text-3xl mb-8 sm:text-left text-center ">🍻 Beerpong gedöns und so</h1>
          <TabList className="flex  justify-center sm:justify-start mb-4">
            <Tab className="text-white font-normal sm:text-2xl text-base mr-4 cursor-pointer">Solo</Tab>
            <Tab className="text-white font-normal sm:text-2xl text-base mr-4 cursor-pointer">Team</Tab>
            <Tab className="text-white font-normal sm:text-2xl text-base mr-4 cursor-pointer">Players</Tab>
            <Tab className="text-white font-normal sm:text-2xl text-base mr-4 cursor-pointer">Create Game</Tab>
            <Tab className="text-white font-normal sm:text-2xl text-base mr-4 cursor-pointer">Regeln</Tab>


          </TabList>
          <TabPanel   className="mx-auto justify-center">
          <h1 className="w-full border-black border-b-2 py-2 mb-4 text-2xl font-bold">Tabelle</h1>

              <SoloTable/>
            <h1 className="w-full border-black border-b-2 py-2 mt-8 text-2xl font-bold">Games Played</h1>

              <div className=" mt-4  p-1 border border-dashed border-black border-8 ">
                <div className=" p-16" style={{"backgroundColor": "#FFA3B3"}}>

    <div className="w-1/2  mx-auto">
      <Piechart />
    </div>

    

                </div>

              </div>
          </TabPanel  >
          <TabPanel >
            <h1>TEST"2</h1>
          </TabPanel>
          <TabPanel >
            <PlayerTable/>
          </TabPanel>
          <TabPanel >
            <Create/>
          </TabPanel>
          <TabPanel>
          <h1 className="w-full border-black border-b-2 mb-4 text-2xl font-semibold">Regeln</h1>

            <Rules/>
          </TabPanel>
        </Tabs>
      </div>
    </div>

</>
  )
}
