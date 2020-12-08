import { Component,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/_service/product.service';
import { dataSource } from 'src/app/model/repository-service';

@Component({
    selector: 'app-productRegistration',
    templateUrl:'productRegistration.component.html',
    styleUrls:['productRegistration.component.scss']
})
export class ProductRegistrationComponent{
    isSubmitted = false;
    isValidFormSubmitted = false;
    product = new Product();
    constructor(private productService:ProductService){

    }

    repositoryServiceList:any[]=[];
    repositoryList:any[]=[];

    @Input()

    ngOnInt(){
        this.initialiseEmptyForm();
    }
    ngAfterViewInit(){
        this.initialiseEmptyForm();
    }
    initialiseEmptyForm(){
        this.specificRepository = false;
        this.repositoryServiceList=dataSource(); //

    }

    onSpecificRepositoryClick(form: NgForm){

        if(form.controls['registory'].value==''){
            this.specificRepository = false;
            alert('Please select Informatica Regestory Type');
            this.repositoryServiceList=dataSource();
            return;
        }else if(form.controls['registory'].value=='PCRS'){
            alert('PCRS');
            this.ngAfterServiceContentChanged();
            this.repositoryServiceList=dataSource();
            
        }else if(form.controls['registory'].value=='MRS'){
            alert('MRS');
            
            this.ngAfterServiceContentChangedMRS();
            this.repositoryServiceList=dataSource();
            
        }
    }

    formChange(form: NgForm){
        if(form.controls['registory'].value=='MRS'){
        
            this.specificRepository = false;
        }
        if(form.controls['registory'].value=='MRS'){
        
            this.specificRepository = false;
        }
    }
    ngAfterServiceContentChanged(){
        alert('Please put data source name here');
        if(dataSource().status==='ACTIVE' && dataSource().repoType==='PCRS'){
            this.repositoryServiceList=dataSource().name.value;
        }

    }
    ngAfterServiceContentChangedMRS(){
        alert('Please put data source name here');
        if(dataSource().status==='ACTIVE' && dataSource().repoType==='MRS'){
            this.repositoryServiceList=dataSource().name.value;
        }
    }
    
    onFormSubmit(form: NgForm){
        this. isValidFormSubmitted = false;
        if(form.invalid){
            return;
        }
        this.isValidFormSubmitted = true;
        this.product.productName = form.controls['runMint'].value;
        this.product.registory = form.controls['registory'].value;
        this.product.isDevRepository = form.controls['devRepository'].value;
        this.product.sharedF = form.controls['sharedF'].value;
        this.product.specificRepository = form.controls['specificRepository'].value;
        this.product.salesForceData = form.controls['salesForceData'].value;
        this.productService.createProduct(this.product);
        this.resetForm(form);
    }
    resetForm(form: NgForm){
        alert('Here');
        this.product = new Product();
        form.resetForm({
            specificRepository: false
        });
    }
    setDefaultValues(){
        this.product.productName = '';
        this.product.registory = '';
        this.product.isDevRepository =false;
        this.product.sharedF = false;
        this.product.specificRepository = false;
        this.product.salesForceData = false;
    }

    ApplicationName="jer";
    desiredRegionList: any=['NY','LA','VI','HK','TK','LN'];
    developerRegionList: any=['NY','LA','VI','HK','TK','LN','BL'];
    serviceList: any=['Shared','Dedicated'];
    connectionList: any=['Flat File','XML','Sybase','MySql','Soap','Oracle','Informix','ADABS'];
    frequencyList: any=['Every 20 Mins','Every 40 Mins','Hourly','Daily'];
    specificRepository: boolean=true;
    registory: string[]=['Power Central Registory','Model Registory']
    appName='Test1';
    GRName="GRN";
    Description="";
    Comment="OK";
}