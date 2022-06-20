<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_users()
    {
        $response = $this->get('api/users');

        $response->assertStatus(200);
    }
    public function test_can_create_user()
    {
        $data = [
            'first_name' => 'Test',
            'last_name' => 'Test',
            'email'=>'test@test.com',
            'password'=>'Testpw000'
        ];

        $response = $this->json('POST', '/api/users', $data);

        $response->assertStatus(200);

        $this->assertDatabaseHas('users', [
          'first_name' => $data['first_name'],
          'email' => $data['email']
        ]);
    }
}
