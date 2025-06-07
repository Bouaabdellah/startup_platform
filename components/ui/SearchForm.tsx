import Form from 'next/form';
import SearchFromReset from './SearchFromReset';
import { Search } from 'lucide-react';

const SearchForm = ({query} : {query? : string}) => {
  return (
    <Form action="/" scroll={false} className='search-form'>
      <input type="text" name="query" placeholder='Search Startup' className='search-input'/>
      {query && 
      <SearchFromReset/>
      }
      <button type='submit' className='search-btn text-white'>
        <Search className='size-5'/>
      </button>
    </Form>
  )
}

export default SearchForm