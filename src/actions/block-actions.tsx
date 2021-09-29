import axios, { AxiosResponse } from 'axios';

interface IBlock {
    hash: string,
    height: number,
    time: number,
    block_index: number
}

interface IBlockDetials {
    size: string,
    blockIndex: number,
    previousHash: string,
    tx: []
}

export async function getBlocksData(pageNumber: number): Promise<IBlock[]> {
    try {
        let url = `http://localhost:3000/api/v1/blocks?page_number=${pageNumber}`;
        const response: AxiosResponse  = await axios.get(url);
        return response.data.data;
    } catch (err: any) {
        return err;
    }    
}

export async function getBlockByHash(hash: string): Promise<IBlockDetials> {
    try {
        let url = `http://localhost:3000/api/v1/block/${hash}`;
        const response: AxiosResponse  = await axios.get(url);
        return response.data.data;
    } catch (err: any) {
        return err;
    }    
}
