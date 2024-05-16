import React from 'react'

function PostItem(props) {

  return (
    <div className='post'>
        <div className="post__content">
            <strong>{props.number}. {props.item.title}</strong>
            <div>
                {props.item.body}
            </div>
        </div>
        <div className="post__btns">
            <button>Удалить</button>
        </div>
    </div>
  )
}

export default PostItem