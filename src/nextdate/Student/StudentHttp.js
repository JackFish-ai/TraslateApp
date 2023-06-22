import { request } from '@/nextdate/util'

const instance = request()

const StudentUserQuest = {
  getCurrentFestival (studentId) {
    return instance.post('/mgt/student/client/select', {

    })
  },
  selectProvice () {
    return instance.post('/mgt/region/provice', {

    })
  },
  selectCity (parentRegionId) {
    return instance.post('/mgt/region/city/' + parentRegionId, {

    })
  },
  loginStudent (Objform) {
    return instance.post('student/login?num=' + Objform.num + '&pwd=' + Objform.pwd, {

    })
  },
  regiter (param) {
    return instance.post('student/regiter?num=' + param.num + '&pwd=' + param.pwd, {

    })
  }
}

export default StudentUserQuest 
