import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { CreateProjectPage } from '../pages/create-project/create-project';
import { ProjectPage } from '../pages/project/project';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { EditProjectPage } from '../pages/edit-project/edit-project';
import { LogoutPage } from '../pages/logout/logout';
import { SearchPage } from '../pages/search/search';
import { SearchProjectsPage } from '../pages/search-projects/search-projects';
import { SearchUsersPage } from '../pages/search-users/search-users'; 
import { RatersModelPage } from '../pages/raters-model/raters-model';
import { BookmarksPage } from '../pages/bookmarks/bookmarks';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserData } from '../providers/user-data';
import { ProjectData } from '../providers/project-data';

import { Reverse } from '../pipes/reverse';
import { FilterProjects } from '../pipes/filter-projects';
import { FilterUsers } from '../pipes/filter-users';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    ProfilePage,
    CreateProjectPage,
    ProjectPage,
    Reverse,
    EditProfilePage,
    EditProjectPage,
    LogoutPage,
    SearchPage,
    SearchProjectsPage,
    SearchUsersPage,
    FilterProjects,
    FilterUsers,
    RatersModelPage,
    BookmarksPage,
    TutorialPage 
  ],
  imports: [
    IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot(),
    Ng2SearchPipeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    HomePage,
    ProfilePage,
    CreateProjectPage,
    ProjectPage,
    EditProfilePage,
    EditProjectPage,
    LogoutPage,
    SearchPage,
    SearchProjectsPage,
    SearchUsersPage,
    RatersModelPage,
    BookmarksPage,
    TutorialPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    UserData,
    ProjectData
  ]
})
export class AppModule {}
