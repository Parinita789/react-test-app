import React from 'react';
import DataGrid from 'react-data-grid';
// import Select from 'react-select';
// import ReactPaginate from 'react-paginate';
import { getBlocksData, getBlockByHash } from '../actions/block-actions';

class Block extends React.Component {
  columns = [
    { key: 'height', name: 'Height' },
    { key: 'hash', name: 'Hash' },
    { key: 'time', name: 'Time' },
    { key: 'block_index', name: 'Block Index' }
  ];
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      inProgress: false,
      hash: '',
      pageNumber: 1,
      blocks: []
    };
  }

  componentDidMount() {
    this.getBlocksDetials();
  }

  getBlocksDetials = async () => {
    let blocks =  await getBlocksData(this.state.pageNumber);
    this.setState({ blocks });
  }

  rowKeyGetter(row) {   
    console.log(row.hash)
  }

  getBlockDetailsByHash = async(hash) => {
    this.setState({ hash })
    await getBlockByHash(this.state.hash)
  }

  render() {
    return (
      <DataGrid columns={this.columns} rows={this.state.blocks} rowKeyGetter={this.rowKeyGetter}/>
    )
  }
}

export default Block;
