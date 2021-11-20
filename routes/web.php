<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\OrderController;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::prefix('product')->group(function(){
  Route::post('search',[ProductController::class,'search'])->name('product.search');
});

Route::prefix('customer')->group(function(){
  Route::post('search',[CustomerController::class,'search']);
});

Route::prefix('vendor')->group(function(){
  Route::post('search',[VendorController::class,'search']);
});

Route::prefix('order')->group(function(){
  Route::post('search',[OrderController::class,'search']);
});

Route::prefix('admin')->group(function(){
  Route::get('/',[AdminController::class,'']);
});