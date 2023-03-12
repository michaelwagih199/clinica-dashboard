
export class AppResources{
 public static resources = {
    "resources": {
      "auth": {
        "base-uri": "/api/auth",
        "login-uri": "/signin",
        "signup-uri": "/signup"
      },
      "home":{
        "base-uri": '/v1/home',
        "get-menu-items": '/menu'
      },
      "patient": {
        "base-uri": "api/patient",
        "get-all": "all",
        "get-all-pageable": "all/pageable",
        "get-new-patients": "all/new",
        "get-registered-patients": "all/registered",
        "get-names": "all/names",
        "get-phones": "all/phones",
        "get-by-name-path-var": "name/{patientName}",
        "get-by-id-path-var": "/{patientId}",
        "get-by-phone1-path-var": "phone/{phone1}",
        "add-new-patient": "newPatient",
        "delete-patient-by-id-var": "archive/{patientId}",
        "update-patient-by-id-var": "update/{patientId}",
        "change-patient-status-uri": "status/{patientId}"
      },
      "patient-diagnosis": {
        "base-uri": "api/diagnosis",
        "add-patient-diagnosis-uri": "patient/{patientId}",
        "get-all-patient-diagnosis-uri": "patient/{patientId}/all",
        "get-patient-diagnosis-by-id": "/{diagnosisId}",
        "update-diagnosis-description": "description/{diagnosisId}",
        "delete-diagnosis": "archive/{diagnosisId}"
      }
    }
  }
}
