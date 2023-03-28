
import { call, put, takeLatest } from 'redux-saga/effects';
import { Fetch ,Error} from '../slice';
function* fetchExampleData(action) {
    try {
      const response = yield call(()=>fetch('https://dummyjson.com/products'));
      const data = yield response.json();
     
      yield put(Fetch(data.products));
    } catch (error) {
      yield put(Error(error));
    }
  }

function * watcher(){
    yield takeLatest('fetch/Fetch',fetchExampleData )
}

export default watcher;