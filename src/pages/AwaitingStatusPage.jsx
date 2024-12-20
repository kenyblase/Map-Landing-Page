import React from 'react'
import QuoteDetailsSection from '../components/QuoteDetailsSection'
import QuoteInformationSection from '../components/QuoteInformationSection'
import ItemsSection from '../components/ItemsSection'
import TermsAndConditions from '../components/TermsAndConditions'

const AwaitingStatusPage = () => {
  return (
    <div class="min-h-screen">
      <QuoteDetailsSection/>
      <QuoteInformationSection/>
      <ItemsSection/>
      <TermsAndConditions/>
    </div>
  )
}

export default AwaitingStatusPage
