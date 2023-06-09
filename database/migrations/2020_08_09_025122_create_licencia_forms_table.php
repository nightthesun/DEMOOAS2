<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLicenciaFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('licencia_forms', function (Blueprint $table) {
            $table->id();
            $table->datetime('fecha_ini');
            $table->datetime('fecha_fin');
            $table->integer('dias');
            $table->integer('horas');
            $table->string('motivo');
            $table->string('estado',10)->nullable();
            $table->text('detalle_estado');
            $table->timestamps();

            $table->integer('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('licencia_forms');
    }
}
