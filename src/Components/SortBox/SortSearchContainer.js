import React from 'react';
import LinkButton from '../../CommonControls/LinkButton';
import './SortSearchContainer.css';

const SortSearch = ({sortMostCommented, sortMostLiked, searchImages}) => {
	return (
		<div className="sortSearchContainer">
			<div className="sortingContainer">
			<LinkButton onClickMethod={() => sortMostLiked()} btntext="Most liked"/>
			<span> | </span>
			<LinkButton onClickMethod={() => sortMostCommented()} btntext="Most commented"/>
		</div>
		<div className="searchContainer">
			<input type="text" placeholder="Search images ..." onChange = {(e) => searchImages(e.target.value)}/>
		</div>
		</div>
	)
}
export default SortSearch;