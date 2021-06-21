import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SoloTable from '../components/solotable';
import PlayerTable from '../components/playerTable';
import Create from '../components/game/create'
import Piechart from '../components/piechart';
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
              <SoloTable/>
              <div className=" mt-16   border border-dashed border-black border-8 ">
                <div className=" grid grid-cols-2 bg-black">

    <div className="w-1/3  mx-auto">
      <Piechart />
    </div>
    <div className="w-1/3  mx-auto">
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
            <h1>Regeln!</h1>
          </TabPanel>
        </Tabs>
      </div>
    </div>

</>
  )
}
