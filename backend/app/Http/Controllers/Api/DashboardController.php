<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\FinancialRecord;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index()
    {
        $users = User::orderBy('created_at', 'DESC')->get();
        $categories = Category::orderBy('created_at', 'DESC')->get();
        $finaancial_records = FinancialRecord::orderBy('created_at', 'DESC')->get();

        return response()->json([
            'status' => true,
            'users' => $users,
            'finaancial_records' => $finaancial_records
        ]);
    }
}
