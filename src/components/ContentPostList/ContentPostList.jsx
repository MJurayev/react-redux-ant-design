import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row,  Avatar, Button} from 'antd';
import { fetchPostsList } from '../../store/actions/posts'
const { Meta } = Card;
function ContentPostList(props) {
    useEffect(()=>{
        props.fetchPostsList()
        console.log(props)
    }, [])
    return (
        <div style={{overflowY:'scroll',overflowX:'hidden', height:'70vh'}}>
           <div className="site-card-wrapper">
            <Row gutter={10}>
                {
                    props.postsList.map((item, key)=>{
                        return <Col  key={key} style={ {marginTop: 20, overflow:'hidden'}} span={8}>
                                    <Card style={{ width: 300, height:'100%' }} loading={props.loading}>
                                        <Meta
                                            avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            }
                                            title={item.title}
                                            description={item.body}
                                        />
                                        
                                    </Card>
                                    <Row style={{transform:'translateY(-100%)', justifyContent: 'end'}}>
                                        <Col >
                                                <Button danger size='small'>Delete</Button>
                                                <Button type='primary' size='small'>Edit</Button>
                                        </Col>
                                    </Row>
                                    
                                </Col>
                    })
                }
                
                
                
            </Row>
        </div>
        </div>
    )
}

const mapStateToProps = state=>{
    return {
        loading:state.posts.loading,
        error:state.posts.error,
        postsList:state.posts.postsList
    }
}

const mapDispatchToProps =dispatch=>{
    return {
        fetchPostsList:()=>dispatch(fetchPostsList())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    
)(ContentPostList);