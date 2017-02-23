import React from 'react';
import VideoModalEpisode from '../../../video_modal_episode.jsx';

class SerieEpisodes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const serie = this.props.serie;
    return(
      <div className='serie-episodes-main'>
        <div className='serie-container'>
          <h2 className='serie-title'>{serie.name}</h2>
          <ul className='serie-episodes-list'>
            {serie.episodes.map((episode) => (
              <li className='serie-episodes-list-item'
                key={"episode-" + episode.id}>
                <ul className='episode-contents'>
                  <VideoModalEpisode videoSource={ episode.video_url } thumbnail={ episode.thumbnail_url }/>

                  <li>
                    <ul className='episode-name-runtime'>
                      <li>{ episode.name }</li>
                      <li>{ episode.runtime }m</li>
                    </ul>
                  </li>
                  <li className='episode-description'>{ episode.description }</li>
                </ul>
            </li>
          ))}
          </ul>

        </div>
      </div>
    );
  }
}

export default SerieEpisodes;