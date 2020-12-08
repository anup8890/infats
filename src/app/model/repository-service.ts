import { Repository } from '../model/repository';

export function dataSource():any{
    let repoList: Repository[] =[
        {
          name : 'MRS_VIT_BDM',
          domain : 'Domain_VIT_BDM',
          isshared: 'true',
          isVersioning:'false',
          repoType: 'MRS',
          status: 'INACTIVE'  
        },
        {
            name : 'MRS_VIT_BDM2',
            domain : 'Domain_VIT_BDM2',
            isshared: 'true',
            isVersioning:'false',
            repoType: 'MRS',
            status: 'ACTIVE'  
        },
         {
            name : 'RS_VIT_ENGDM10',
            domain : 'Domain_VIT_ENGDM10',
            isshared: 'true',
            isVersioning:'false',
            repoType: 'PCRS',
            status: 'ACTIVE'  
         }, {
            name : 'MRS_VIT_BDM',
            domain : 'Domain_VIT_BDM',
            isshared: 'true',
            isVersioning:'false',
            repoType: 'MRS',
            status: 'INACTIVE'  
          },
          {
            name : 'MRS_VIT_BDM2',
            domain : 'Domain_VIT_BDM2',
            isshared: 'true',
            isVersioning:'false',
            repoType: 'MRS',
            status: 'ACTIVE'  
          },
          {
              name : 'MRS_VIT_BOM2',
              domain : 'Domain_VIT_BOM2',
              isshared: 'true',
              isVersioning:'false',
              repoType: 'MRS',
              status: 'ACTIVE'  
          },
           {
              name : 'RS_VIT_ENGDM10_A',
              domain : 'Domain_VIT_ENGDM10_A',
              isshared: 'true',
              isVersioning:'false',
              repoType: 'PCRS',
              status: 'ACTIVE'  
           },
           {
              name : 'RS_VIT_ENGDM10_B',
              domain : 'Domain_VIT_ENGDM10_B',
              isshared: 'true',
              isVersioning:'false',
              repoType: 'PCRS',
              status: 'ACTIVE'  
           },
           {
              name : 'RS_VIT_ENGDM1_A',
              domain : 'Domain_VIT_ENGDM1_A',
              isshared: 'true',
              isVersioning:'false',
              repoType: 'PCRS',
              status: 'INACTIVE'  
           }

    ]
}