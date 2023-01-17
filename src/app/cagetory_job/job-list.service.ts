import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import {Faker, faker} from '@faker-js/faker'
@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor() { }
  //jobdetail
  jobdetail =[
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
    {
      job_list: faker.internet.userName(),
      badge: faker.helpers.arrayElement(['1','9','5','13','17','71','39','85','26','37','54','27','20','20','40','80']),
    },
  ]



  // sponser
 jobdetail1 =[
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  {
    sponsor: faker.image.image(),
  },
  ]


  //logo list job
  jobdetail2 =[
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },
 {
  logo: faker.image.avatar(),
 },



  ]
}



