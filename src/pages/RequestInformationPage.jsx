import React from 'react'
import Roadmap from '../components/Roadmap'
import InputFields from '../components/InputFields';
import AddItemsTable from '../components/AddItemsTable';
import NoteSection from '../components/NoteSection';
import ButtonGroup from '../components/ButtonGroup'

const RequestInformationPage = () => {
  return (
      <div class="min-h-screen p-6">
        <Roadmap/>
        <div className='border'>
          <InputFields/>
          <AddItemsTable/>
          <NoteSection/>
          <hr className="w-full"/>
          <ButtonGroup/>
        </div>
    </div>
  ) 
};


export default RequestInformationPage
