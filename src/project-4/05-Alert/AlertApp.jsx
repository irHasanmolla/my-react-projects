import React from 'react'
import Alert from '../component/Alert'

export default function AlertApp() {
  return (
    <div className='Alert-app'>
      <Alert type={'success'} message={'Successful Login'}/>
      <Alert type={'info'} message={'Time Triggered'} delay={true}/>
      <Alert type={'info'} message={'Successful Login'}/>
    </div>
  )
}
