<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Pizzamenumillesabords;
use AppBundle\Form\PizzamenumillesabordsType;

class PizzaController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/pizza/{page}/{limit}")
     */
    public function getPizzaAction(Request $request, $page = 1, $limit = 5) {
        $Menu = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Pizzamenumillesabords')
                ->createQueryBuilder('v');

        $Menu_clone = clone($Menu);
        $lists['count'] = (int) $Menu->select('COUNT(v) as list')->getQuery()->getResult()[0]['list'];

        // Check offset to be valid
        $limit = (int) $limit;
        $page = (int) $page;
        $page = ($page > 0 && $page <= ceil($lists['count'] / $limit)) ? $page : 1;
        $offset = ($page * $limit) - $limit;

        $lists['contain'] = $Menu_clone->setFirstResult($offset)->setMaxResults($limit)->getQuery()->getResult();


        return $lists;
    }

     /**
     * @Rest\View()
     * @Rest\Post("/pizza")
     */
    public function postPizzaAction(Request $request) {
        $Pizza = new Pizzamenumillesabords();
        $form = $this->createForm(PizzamenumillesabordsType::class, $Pizza);

        $form->submit($request->request->all()); // Validation des données

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Pizza);
            $em->flush();
            return $Pizza;
        } else {
            return $form;
        }
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/pizza/{id}")
     */
    public function removePizzaAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Pizza = $em->getRepository('AppBundle:Pizzamenumillesabords')
                    ->find($request->get('id'));

        if ($Pizza) {
            $em->remove($Pizza);
            $em->flush();
        }
    }

    /**
     * @Rest\View()
     * @Rest\Put("/pizza/{id}")
     */
    public function updatePizzaAction(Request $request) {
        $Pizza = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Pizzamenumillesabords')
                ->find($request->get('id')); // L'identifiant en tant que paramètre n'est plus nécessaire

        if (empty($Pizza)) {
            return new JsonResponse(
                ['message' => 'Pizza non trouvé'], 
                Response::HTTP_NOT_FOUND
            );
        }

        $form = $this->createForm(PizzamenumillesabordsType::class, $Pizza);

         // Le paramètre false dit à Symfony de garder les valeurs dans notre 
         // entité si l'utilisateur n'en fournit pas une dans sa requête
        $form->submit($request->request->all(), false);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            // l'entité vient de la base, donc le merge n'est pas nécessaire.
            // il est utilisé juste par soucis de clarté
            $em->merge($Pizza);
            $em->flush();
            return $Pizza;
        } else {
            return $form;
        }
    }
}