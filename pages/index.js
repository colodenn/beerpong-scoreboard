import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SoloTable from '../components/solotable';



export default function Home() {
  
  return (
    <div className="bg-gray-700 w-screen h-screen flex justify-center">

      <div className="container flex justify-center">
      <Tabs >
          <TabList className="flex justify-center">
            <Tab className="text-white font-bold text-2xl mr-4 cursor-pointer">Solo</Tab>
            <Tab className="text-white font-bold text-2xl mr-4 cursor-pointer">Team</Tab>
          </TabList>
          <TabPanel>
              <SoloTable/>
          </TabPanel>
          <TabPanel>
            <h1>TEST"2</h1>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
