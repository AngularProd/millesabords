<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Vins4;

class Vins2Controller extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/vins")
     */
    public function getVinsAction(Request $request) {
        $Boisson = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Vins4')
                ->findAll();

        return $Boisson;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/vins")
     */
    public function postVinsAction(Request $request) {
        $values = $request->request->all();
        foreach ($values as $key => $value) {
            if (!$value)
                return false;
        }
        $data = new Vins4();
        $data->setNom($values['nom']);
        $data->setPm($values['pm']);
        $data->setGm($values['gm']);

        $entity_manager = $this->getDoctrine()->getManager();
        $entity_manager->persist($data);
        $save = $entity_manager->flush();

        return $save ? [$values, gettype($values)]: false;
    }    

     /**
     * @Rest\View()
     * @Rest\Get("/vins/delete/{id}")
     */
    public function removeVinsAction(Request $request, $id) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Vins4 = $em->getRepository('AppBundle:Vins4')
                    ->find($request->get('id'));

        if ($Vins4) {
            $em->remove($Vins4);
            $delete = $em->flush();
            return $delete;
        }
        return false;
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/vins/update/{id}")
     */
    public function updateVinsAction(Request $request) {
        $entity_manager = $this->getDoctrine()->getManager();
        $product = $entity_manager->getRepository(Vins4::class)->find($request->get('id'));

        if (!$product)
            return new JsonResponse(
                ['message' => 'Vins non trouvé'], 
                Response::HTTP_NOT_FOUND
            );

        $values = $request->request->all();
        foreach ($values as $key => $value) {
            if (!$value)
                return false;
        }
        $product->setNom($values['nom']);
        $product->setPm($values['pm']);
        $product->setGm($values['gm']);

        $update = $entity_manager->flush();

        return ($update) ? $values : false;
    }
}