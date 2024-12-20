import React from 'react'
import Roadmap2 from '../components/Roadmap2'
import InputFields2 from '../components/InputFields2'
import Attachment from '../components/Attachments'
import ButtonGroup2 from '../components/ButtonGroup2'

const TermsAndAttachmentPage = () => {
  return (
    <div>
      <Roadmap2/>
      <InputFields2/>
      <Attachment/>
      <hr className='w-full'/>
      <ButtonGroup2/>
    </div>
  )
}

export default TermsAndAttachmentPage
