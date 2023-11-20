import React from 'react'

function dropdown({isActive}) {
  return (
    <div>
         {isActive && (
            <div  style={{
                position:"relative"
            }}>
                <Card>
                    love
                </Card>

            </div>
        )}
      
    </div>
  )
}

export default dropdown
