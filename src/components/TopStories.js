import React, { Component } from 'react'

class TopStories extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.GATSBY_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      this.setState({items: data["results"]})
    })
  }

  render() {
    // this section would return only the first story, but as many times as there are stories in the top stories section
    // const data = this.state.items
    // console.log(data)
    // let url = ''
    // let title = ''
    // if  (data.length > 0) {
    //   url = data[0].url.first
    //   title = data[0].title.first
    // }

    return (
      <div className="topstories">
      {this.state.items.map((item) => <p><a href={item["url"]}>{item["title"]}</a></p>)}
      </div>
    )
  }
}

export default TopStories
